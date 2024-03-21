# my-website-vue
This repo hosts the source code for my website.

# Server Setup
This website is being hosted on a Linode running Lighttpd. Previously, the same system hosted my project "government.alexjf.dev" which has been taken down.
## SSL Setup
SSL is configured with CertBot and a crontab script. These instructions assume you can navigate the terminal, edit files, and have a basic understanding of Ubuntu.
1. To start with, follow steps one through five given [here](https://certbot.eff.org/instructions?ws=webproduct&os=ubuntufocal).
2. Make sure to stop the Lighttpd server. For me the command is `/etc/init.d/lighttpd stop`. Then, run the first command given for step six. Give the domain of your site when asked. You should also include the www subdomain if you are using a root domain.
3. Lighttpd takes the certification and key in a slightly different form than other web servers. Before the certification can be added this command must be run: `cat /etc/letsencrypt/live/YOUR.DOMAIN/cert.pem /etc/letsencrypt/live/YOUR.DOMAIN/privkey.pem > /etc/letsencrypt/live/YOUR.DOMAIN/web.pem`. This combines the two files into one, which is what Lighttpd wants.
4. Add the following to your configuration file found at `/etc/lighttpd/lighttpd.conf`.
```
$SERVER["socket"] == ":443" {
        ssl.engine = "enable"
        ssl.pemfile = "/etc/letsencrypt/live/alexjf.dev/web.pem"
        ssl.ca-file = "/etc/letsencrypt/live/alexjf.dev/chain.pem"
        server.document-root = "/var/www/html"
}
```
5. Before restarting Lighttpd, move on to step 8 of the CertBot tutorial.
6. Restart Lighttpd with `/etc/init.d/lighttpd start`.
7. Hopefully, you should now be able to connect to your site with https. However, in order for automatic renewal to work properly, you need to do one more step. Open your crontab user file with `crontab -e` and add the following to the end.
```
0 0 * * 0 /etc/init.d/lighttpd stop; certbot renew; cat /etc/letsencrypt/live/alexjf.dev/cert.pem /etc/letsencrypt/live/government.alexjf.dev/privkey.pem > /etc/letsencrypt/live/alexjf.dev/web.pem; /etc/init.d/lighttpd start; > /root/log/cerbot-renew.log
``` 
  It should all be in one line. This performs step 3 of this guide once a month. Without it, CertBot will automatically renew your certificate but Lighttpd will not recognize it.