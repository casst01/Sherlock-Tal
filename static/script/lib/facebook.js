require.def("sampleapp/lib/facebook",
    [
        "antie/class"
    ],
    function(Class) {
        return Class.extend({

			oAuthUrl: 'http://graph.facebook.com/oauth/authorize',

			init: function (appId, appUrl, permissions) {
				this._appId = appId;
				this._appUrl = appUrl;
				this._permissions = permissions || [];
			},

			redirect: function (url) {
				window.location = this._getRedirectUrl();
			},

			getAccessToken: function() {
				return this._accessToken || {};
			},

			hasAccessToken: function() {
				return (this._accessToken) ? true : false;
			}

			_getRedirectUrl: function () {
				if(!this._redirectUrl) {
					this._redirectUrl = this._buildUrl();
				}
				return this._redirectUrl;
			},

			_buildUrl: function() {
				var params = {
					'type': 'user_agent',
					'client_id': this._appId,
					'redirect_uri': this._appUrl
				};
				return this.oAuthUrl + '?' + this._buildQueryString(params);
			},

			_buildQueryString: function(params) {
				var qs = '';
				for(var key in params) {
					var value = params[key];
					qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
				}
				return qs;
			},

			_parseAccessToken: function (accessTokenString) {
				var parts = accessTokenString.split('&');
				this._accessToken =  {
					'token': parts[0].replace('access_token=', ''),
					'expires_in': parts[1].replace('expires_in=', '')
				};
			}

        });
    }
);