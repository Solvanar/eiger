Turning a single consumer web-based Platforms into a SaaS
A web-based gaming platform (=gPlatform) is currently providing it’s services to one single gaming site (=gSite).
The services provided by gPlatform to gSite include hosting web-games and backoffice for managing players that sign-up and play on gSite.

We want to make gPlatform into a SaaS that can be sold to other gaming sites as subscription-based service.

Each new gaming company operating a gaming site, will have it’s own dedicated domain - for example:
Company A will have a domain cool-games.com
Company B will have a domain luck-games.co.uk
etc

Currently at gPlatform, users are identified by using email as a unique key.

Give a short, clear explanation for every question below:
1.	How can we design the system in a way that every Company will be able to serve games on their gaming site from their domain?

**ANSWER: With Nginx as reverse-proxy and different “tenants” for different sites.**

2.	What modification should be done to the users table at gPlatform to support this change?

**ANSWER: Add column with Company ID if one email can get access to only one site. If not, then probably add the table with set of right for provided email on different sites.**

3.	Considering we have 1 backend cluster that serves all companies, how can we validate a user login on one gaming domain in such a way that it does not give access to a different gaming domain? (i.e. authenticating on site A, grants access to site A only)

**ANSWER: Users database should be a separate authorization service or at least database, which keep info about user’s rights on different platforms. When user try to access site, platform will check user’s rights in common users service/database and allow access for a site or deny it.**
