
import fire from"../fire";

const socialMediaAuth = (provider) => {
    return fire
    .auth()
    .signInWithPopup(provider)
    .then((res)=>{
        return res.user;
    })
    .catch((er)=>{
        return er;
    })
};

export default socialMediaAuth;