const getAcsses = () => {
  return localStorage.getItem("Acsses");
};

const setAcsses = (Acsses) => {
  localStorage.setItem("Acsses", Acsses);
};

const removeAcsses = () => {
  localStorage.removeItem("Acsses");
};


const getRefresh = () => {
  return localStorage.getItem("Refresh");
};

const setRefresh = (Refresh) => {
  localStorage.setItem("Refresh", Refresh);
};

const removeRefresh = () => {
  localStorage.removeItem("Refresh");
};


const getIdentify = () => {
  return localStorage.getItem("Identify");
};

const setIdentify = (Identify) => {
  localStorage.setItem("Identify", Identify);
};

const removeIdentify = () => {
  localStorage.removeItem("Identify");
};



const identifyService = {
  getAcsses,getRefresh,
  setAcsses,setRefresh,
  removeAcsses,removeRefresh,

  getIdentify,
  setIdentify,
  removeIdentify,
};

export default identifyService;
