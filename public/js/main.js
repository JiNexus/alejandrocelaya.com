var acelaya = {};

/**
 * Startup operations
 */
$(document).ready(function() {
    acelaya.guiUtils.init();
    acelaya.skills.init();
    acelaya.contact.init();
});

function recaptchaCallaback (value) {
    acelaya.contact.initRecaptcha(value);
}
