import { log } from "../commons/Common";
import { clearStorage, getUser } from "../helpers/LocalStorageHelper";
import { get, post, postMultipart } from "./HttpClient";

const getURL = (orgCode, module) => {
  return "https://" + orgCode + ".webhr.co/m/kiosk/?m=" + module;
};

const getModuleURL = async (module, page) => {
  let user = await getUser();
  let url =
    "https://" +
    user.OrganizationCode +
    ".webhr.co/m/kiosk/?m=" +
    module +
    "&p=" +
    page +
    "&t=" +
    user.UserToken;
  return url;
};

export const login = (domain, username, password) => {
  let url = getURL(domain, "Login") + "&utype=0";
  return get(url, { u: username, p: password });
};

export const getWebHRData = async () => {
  let url = await getModuleURL("Employees", "WebHRData");
  return get(url);
};

export const getTodayAttendance = async (employeeId) => {
  let url =
    (await getModuleURL("TimeClockKiosk", "GetTodayAttendance2")) +
    "&n=1&e=" +
    employeeId;
  return get(url);
};

export const sendAttendance = async (
  device,
  appVersion,
  employeeId,
  attendanceType,
  date,
  time,
  latitude,
  longitude,
  stationId,
  projectId,
  scheduleId,
  notes,
  image
) => {
  let url =
    (await getModuleURL("TimeClockKiosk", "AddAttendance")) +
    "&e=" +
    employeeId +
    "&offline=0&am=5&av=" +
    appVersion +
    "&dt=" +
    date +
    "&tm=" +
    time +
    "&dv=" +
    device;

  let params = {
    at: attendanceType,
    lat: latitude,
    lon: longitude,
    sid: stationId,
    pid: projectId,
    sch: scheduleId,
    nm: "1",
    e: employeeId,
    des: notes,
    image,
  };

  return postMultipart(url, params);
};

export const getDashboardData = async () => {
  let url =
    (await getModuleURL("TimeClockKiosk", "GetTodayTimesheetData")) + "&n=1";
  return get(url);
};

export const getSchedulerAndTasks = async (employeeId, startDate, endDate) => {
  let url =
    (await getModuleURL("TimeClockKiosk", "ScheduleList")) +
    "&n=1&e=" +
    employeeId +
    "&std=" +
    startDate +
    "&end=" +
    endDate;
  return get(url);
};

export const syncUpData = async (data) => {
  let user = await getUser();
  let url =
    "https://" +
    user.OrganizationCode +
    ".webhr.co/m/kiosk/?m=" +
    "SyncUpAttendance" +
    "&t=" +
    user.UserToken;

  log("URL: ", url);
  return postMultipart(url, { data: data });
};

export const uploadImages = async (imageBase64, imageKey) => {
  let user = await getUser();
  let url =
    "https://" +
    user.OrganizationCode +
    ".webhr.co/m/kiosk/?m=" +
    "SyncUpAttendancePhoto" +
    "&t=" +
    user.UserToken;

  log("URL: ", url);
  return postMultipart(url, { ap: imageBase64, ak: imageKey });
};

export const uploadFingerPrint = async (base64Image, employeeId) => {
  let user = await getUser();
  let url =
    "https://" +
    user.OrganizationCode +
    ".webhr.co/m/kiosk/?m=" +
    "TimeClockKiosk" +
    "&p=FingerPrints" +
    "&action=UploadFingerPrint" +
    "&t=" +
    user.UserToken;

  let params = { fp: base64Image, e: employeeId };

  return post(url, params);
};
export const getFingerPrint = async () => {
  let user = await getUser();
  let url =
    "https://" +
    user.OrganizationCode +
    ".webhr.co/m/kiosk/?m=" +
    "TimeClockKiosk" +
    "&p=FingerPrints" +
    "&action=GetFingerPrints" +
    "&t=" +
    user.UserToken;

  return get(url);
};
export const deleteFingerprintApi = async (employeeId) => {
  let user = await getUser();
  let url =
    "https://" +
    user.OrganizationCode +
    ".webhr.co/m/kiosk/?m=" +
    "TimeClockKiosk" +
    "&p=FingerPrints" +
    "&action=DeleteFingerPrint" +
    "&t=" +
    user.UserToken;
  return post(url, { e: employeeId });
};

export const logout = (updateUser) => {
  clearStorage();
  updateUser(null);
};
