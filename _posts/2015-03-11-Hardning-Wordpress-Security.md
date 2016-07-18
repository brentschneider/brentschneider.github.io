---
title: "Hardening wordpress"
quote: Anything you decide to apply to harden WordPress security will help.
image: false
---

##Ever wondered why WordPress is such a popular target for hackers?

	"WordPress now powers 18.9% of the Web", according to founder Matt Mullenweg.

It’s up to you to make your WordPress as secure as possible, there are several ways of making your WordPress secure as possible.


__Vulnerabilities on Your Computer__

Make sure the computers you use are free of spyware, malware, and virus infections. No amount of security in WordPress or on your web server will make the slightest difference if there is a keylogger on your computer.



##Correct File Permissions

You should give the correct file permission and if you give full permission to files and folders then the hackers can hack it easily. Tips: Set the permission as follows: All folder permissions should be set to 755. All files permissions should be set to 644. Files that you want to edit in the WordPress Theme editors permissions should be set to 666. Never ever use 777 for WordPress permissions


- Move wp-config.php
- Hide Your WordPress Version
- Don’t Allow Logins via wp-login.php
- Add Custom .htaccess Rules for Locking Down wp-admin

###Login and Password-Protection Plugins
- Add two-factor authentication
- [google authenticator](https://wordpress.org/plugins/google-authenticator/)


###Spam blockers

- [Spam shield](https://wordpress.org/plugins/wp-spamshield/)
- [Anti spam](https://wordpress.org/plugins/anti-spam/)
- [Stop spammer](https://wordpress.org/plugins/stop-spammer-registrations-plugin/)


###Backup Plugins

- [Back up wordpress](https://wordpress.org/plugins/backupwordpress/)
- [Wp db backup](https://wordpress.org/plugins/wp-db-backup/)
- [Back wp up](https://wordpress.org/plugins/backwpup/)


###Make sure you have a clean Theme

- [Exploit scanner](https://wordpress.org/plugins/exploit-scanner/)
- [Antivirus](https://wordpress.org/plugins/antivirus/)
- [Theme Authenticity Checker](https://wordpress.org/plugins/tac/)


####Security is in your hands

Security in WordPress is taken very seriously, but as with any other system there are potential security issues that may arise if some basic security precautions aren't taken.


##Further reading

- [Cut through the WP BS](https://blog.sucuri.net/2012/08/wordpress-security-cutting-through-the-bs.html)
- [Hardening WordPress](http://codex.wordpress.org/Hardening_WordPress)
- [Brute Force Attacks](http://codex.wordpress.org/Brute_Force_Attacks)
- [FBI warns patch-and-update now](https://nakedsecurity.sophos.com/2015/04/08/fbi-warns-wordpress-users-of-isis-threat-patch-and-update-now/)
- [Search Wordpress security](https://wordpress.org/plugins/search.php?q=security)
