function ForgotValidate(){var e=$("#forgot-password-form").valid();return(e?showWaitingPopup:hideWaitingPopup)("body"),e}$(document).ready(function(){var e=new ejs.inputs.TextBox({cssClass:"e-outline e-custom e-account",floatLabelType:"Auto"});e.appendTo("#key-input"),null!=document.getElementById("key-input")&&(e.focusIn(),document.getElementById("key-input").ej2_instances[0].value=localStorage.getItem(window.location.hostname+"_email")),localStorage.removeItem(window.location.hostname+"_email"),$("#forgot-password-form").validate({errorElement:"span",onkeyup:function(e,o){9!=o.keyCode&&$(e).valid()},onfocusout:function(e){$(e).valid()},rules:{userName:{required:!0}},highlight:function(e){$(e).closest(".forgot-form-input-field").addClass("has-error")},unhighlight:function(e){$(e).closest(".forgot-form-input-field").removeClass("has-error"),$(e).parent().find("p.validation-holder").html("")},errorPlacement:function(e,o){$(o).parent().find("p.validation-holder").html(e)},messages:{userName:{required:window.Server.App.LocalizationContent.LoginUsernameEmailValidator}}})}),$(document).ready(function(){$("#forgot-password-form").on("submit",function(e){ForgotValidate()||e.preventDefault()})});