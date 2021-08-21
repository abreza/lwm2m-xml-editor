// ============================== AUTH ============================== //
export const loginUrl = 'auth/login/';

// ============================== USER ============================== //
const USER = 'user/';
export const updateProfileUrl = USER + 'update/',
  getAllUsersUrl = USER + 'find/',
  createUserUrl = USER + 'create/',
  getPermissionsUrl = USER + 'permissions/',
  findRolesUrl = USER + 'findRole/',
  CRUD_RoleUrl = USER + 'role/',
  activateRoleUrl = USER + 'activate/',
  suspendRoleUrl = USER + 'suspend/';

// =========================== DEVICE INFORMATION ============================ //
const DEVICE_INFORMATION = 'deviceInformation/';
export const getDeviceEventsUrl = DEVICE_INFORMATION + 'getDeviceEvents/',
  getDeviceDataUrl = DEVICE_INFORMATION + 'getDeviceDatas/',
  getDeviceStatusUrl = DEVICE_INFORMATION + 'getDeviceStatus/',
  getPerCapitaConsumptionUrl = DEVICE_INFORMATION + 'getPerCapitaConsumption/',
  getMarksUrl = DEVICE_INFORMATION + 'getMarks/',
  getStatisticsUrl = DEVICE_INFORMATION + 'getStatistics/';

// ============================== DEVICE MODEL ============================== //
const DEVICE_MODEL = 'deviceModel/';
export const findDeviceModelUrl = DEVICE_MODEL + 'findDeviceModel/',
  createDeviceFirmwareUrl = DEVICE_MODEL + 'createDeviceFirmware/',
  deleteDeviceFirmwareUrl = DEVICE_MODEL + 'deleteDeviceFirmware/',
  createDeviceModelUrl = DEVICE_MODEL + 'createDeviceModel/',
  readDeviceModelUrl = DEVICE_MODEL + 'readDeviceModel/',
  updateDeviceModelUrl = DEVICE_MODEL + 'updateDeviceModel/',
  deleteDeviceModelUrl = DEVICE_MODEL + 'deleteDeviceModel/';

// ============================== DEVICE PROFILE ============================== //
const DEVICE_PROFILE = 'deviceProfile/';
export const createDeviceProfileUrl = DEVICE_PROFILE + 'create/',
  readDeviceProfileUrl = DEVICE_PROFILE + 'read/',
  updateDeviceProfileUrl = DEVICE_PROFILE + 'update/',
  deleteDeviceProfileUrl = DEVICE_PROFILE + 'delete/',
  findDeviceProfileUrl = DEVICE_PROFILE + 'find/',
  getActivationCodeUrl = DEVICE_PROFILE + 'getActivationCode/',
  getActiveDevicesCountUrl = DEVICE_PROFILE + 'getActiveDevicesCount/';

// ============================== ORDERS ============================== //
const ORDERS = 'orders/';
export const addOrdersUrl = ORDERS + 'addOrder/',
  dismissOrdersUrl = ORDERS + 'dismiss/',
  readOrdersUrl = ORDERS + 'read/',
  getActiveOrdersUrl = ORDERS + 'read/';

// ============================== SUBSCRIBER ============================== //
export const CRUD_SubscriberUrl = 'subscriber';

// ============================== USER ROLE ============================== //
const USER_ROLE = 'userRole/';
export const CRUD_userRole = USER_ROLE + 'userRole/',
  findUserRoleUrl = USER_ROLE + 'findUserRole/',
  findUserRoleByUsernameUrl = USER_ROLE + 'findUserRoleByUsername/',
  checkPermissionUserRoleUrl = USER_ROLE + 'checkPermission/';

// ============================== TCP ============================== //
const TCP = 'connection/';
export const sendDeviceConnectionUrl = TCP + 'order/',
  getDeviceConnectionUrl = TCP + 'messages/';

// ============================== PROCESS ============================== //
const PROCESS = 'process/';
export const getLstWarningUrl = PROCESS + 'lastWarnings/';

// ============================== REPORT ============================== //
const REPORT = 'reports/';
export const generateReportUrl = REPORT + 'generateReport/',
  getReportsHistoryUrl = REPORT + 'getReportsHistory/';
