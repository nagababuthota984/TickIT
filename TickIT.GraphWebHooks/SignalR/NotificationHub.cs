// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

using Microsoft.AspNetCore.SignalR;

namespace TickIT.GraphWebhooks.SignalR
{
    /// <summary>
    /// An implementation of the Hub class, used to initialize
    /// a HubContext. This class does nothing since the app is
    /// not receiving SignalR notifications, only sending
    /// </summary>
    public class NotificationHub : Hub {}
}
