﻿namespace TT.HttpClient.Weixin.WeixiinResult
{
    public class WeixinTokenResult : BaseWeChatReulst
    {
        public string access_token { get; set; }
        public int expires_in { get; set; }
    }
}