import { MainHeader } from "../componnets/MainHeader";
import Screen from "../componnets/Screen";
import TimeClock from "./TimeClock";

const Home = () => {
  const renderContent = () => {
    // if (settings?.showEmployees && selectedEmployeeId === 0) {
    //   return <EmployeesList onEmployeeSelect={onEmployeeSelect} />;
    // } else {
    return (
      <TimeClock
      // onValidate={onValidate}
      // showSuccessMessage={showSuccessMessage}
      // sucessMessageParams={successParams}
      // selectedEmployeeId={selectedEmployeeId}
      // showDashboard={settings?.showTimesheetData}
      // onSyncInfoPress={onSyncInfoPress}
      // selectedEmployeeName={selectedEmployeeName}
      // kioskType={settings.kioskUserType}
      // location={location}
      />
    );
    //}
  };

  return (
    <Screen
      content={
        <div>
          <MainHeader />
          <TimeClock />
        </div>
      }
    />
  );
};
export default Home;
