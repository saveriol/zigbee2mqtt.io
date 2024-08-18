"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[75060],{93559:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>m,data:()=>k});var l=o(86904);const i=(0,l.Lk)("h1",{id:"climax-scm-5zbs",tabindex:"-1"},[(0,l.Lk)("a",{class:"header-anchor",href:"#climax-scm-5zbs"},[(0,l.Lk)("span",null,"Climax SCM-5ZBS")])],-1),n=(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[(0,l.Lk)("th"),(0,l.Lk)("th")])],-1),a=(0,l.Lk)("tr",null,[(0,l.Lk)("td",null,"Model"),(0,l.Lk)("td",null,"SCM-5ZBS")],-1),s=(0,l.Lk)("td",null,"Vendor",-1),r=(0,l.Lk)("tr",null,[(0,l.Lk)("td",null,"Description"),(0,l.Lk)("td",null,"Roller shutter")],-1),c=(0,l.Lk)("tr",null,[(0,l.Lk)("td",null,"Exposes"),(0,l.Lk)("td",null,"cover (state, position), linkquality")],-1),d=(0,l.Lk)("tr",null,[(0,l.Lk)("td",null,"Picture"),(0,l.Lk)("td",null,[(0,l.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SCM-5ZBS.png",alt:"Climax SCM-5ZBS"})])],-1),u=(0,l.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="calibration" tabindex="-1"><a class="header-anchor" href="#calibration"><span>Calibration</span></a></h3><ol><li>Before calibration, the external local switches must be connected to the Shutter Control.</li><li>Press and hold the Function button for 3~10 seconds and release to enter Calibration mode. The Shutter Controller will roll toward the &quot;Open&quot; direction for 4 minutes upon entering Calibration mode.</li><li>Wait for 4 minutes for Shutter Control to stop rolling to &quot;Open&quot; direction, then activate the connected external local &quot;Close&quot; switch to close the shutter.</li><li>Activate the &quot;Open&quot; external local switch the moment the shutter is fully closed. The Shutter control will record the time it took between step 3 and 4 as the new &quot;close time&quot;</li><li>The Shutter control will roll toward an open direction after step 4</li><li>Activate the &quot;Close&quot; external local switch the moment the shutter is fully opened. The Shutter control will record the time it took between step 5 and 6 as the new &quot;open time&quot;</li></ol><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',4),h=(0,l.Fv)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. To read the current state of this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',6),p={},m=(0,o(19469).A)(p,[["render",function(e,t){const o=(0,l.g2)("RouteLink");return(0,l.uX)(),(0,l.CE)("div",null,[i,(0,l.Lk)("table",null,[n,(0,l.Lk)("tbody",null,[a,(0,l.Lk)("tr",null,[s,(0,l.Lk)("td",null,[(0,l.bF)(o,{to:"/supported-devices/#v=Climax"},{default:(0,l.k6)((()=>[(0,l.eW)("Climax")])),_:1})])]),r,c,d])]),u,(0,l.Lk)("p",null,[(0,l.Lk)("em",null,[(0,l.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,l.k6)((()=>[(0,l.eW)("How to use device type specific configuration")])),_:1})])]),h])}]]),k=JSON.parse('{"path":"/devices/SCM-5ZBS.html","title":"Climax SCM-5ZBS control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Climax SCM-5ZBS control via MQTT","description":"Integrate your Climax SCM-5ZBS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Calibration","slug":"calibration","link":"#calibration","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1723982720000},"filePathRelative":"devices/SCM-5ZBS.md"}')}}]);