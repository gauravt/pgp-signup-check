export default {
  name: 'alert',
  initialize() {
    Discourse.User.findByUsername(Discourse.User._current.username).then(function(user){
            //res = user.custom_fields.user_field_4;
            console.log("User Onboarding: "+user);
            //if(!res){ lepopup_popup_open('s25e08'); }
        });
  }
};
