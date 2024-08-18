"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[69009],{17108:(n,e,s)=>{s.r(e),s.d(e,{comp:()=>i,data:()=>p});var a=s(86904);const t=(0,a.Fv)('<h1 id="more-configuration-options" tabindex="-1"><a class="header-anchor" href="#more-configuration-options"><span>More configuration options</span></a></h1><h2 id="network-map" tabindex="-1"><a class="header-anchor" href="#network-map"><span>Network map</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># Optional: networkmap options</span></span>\n<span class="line"><span class="token key atrule">map_options</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">graphviz</span><span class="token punctuation">:</span></span>\n<span class="line">        <span class="token comment"># Optional: Colors to be used in the graphviz network map (default: shown below)</span></span>\n<span class="line">        <span class="token key atrule">colors</span><span class="token punctuation">:</span></span>\n<span class="line">            <span class="token key atrule">fill</span><span class="token punctuation">:</span></span>\n<span class="line">                <span class="token key atrule">enddevice</span><span class="token punctuation">:</span> <span class="token string">&#39;#fff8ce&#39;</span></span>\n<span class="line">                <span class="token key atrule">coordinator</span><span class="token punctuation">:</span> <span class="token string">&#39;#e04e5d&#39;</span></span>\n<span class="line">                <span class="token key atrule">router</span><span class="token punctuation">:</span> <span class="token string">&#39;#4ea3e0&#39;</span></span>\n<span class="line">            <span class="token key atrule">font</span><span class="token punctuation">:</span></span>\n<span class="line">                <span class="token key atrule">coordinator</span><span class="token punctuation">:</span> <span class="token string">&#39;#ffffff&#39;</span></span>\n<span class="line">                <span class="token key atrule">router</span><span class="token punctuation">:</span> <span class="token string">&#39;#ffffff&#39;</span></span>\n<span class="line">                <span class="token key atrule">enddevice</span><span class="token punctuation">:</span> <span class="token string">&#39;#000000&#39;</span></span>\n<span class="line">            <span class="token key atrule">line</span><span class="token punctuation">:</span></span>\n<span class="line">                <span class="token key atrule">active</span><span class="token punctuation">:</span> <span class="token string">&#39;#009900&#39;</span></span>\n<span class="line">                <span class="token key atrule">inactive</span><span class="token punctuation">:</span> <span class="token string">&#39;#994444&#39;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="external-converters" tabindex="-1"><a class="header-anchor" href="#external-converters"><span>External converters</span></a></h2><p>You can define external converters to e.g. add support for a DiY device. The extension can be a file with <code>.js</code> extension in the <code>data</code> directory or a NPM package. Ensure that default export from your external converter exports an array or device object (refer to the definition in the <code>devices</code> folder of zigbee-herdsman-converters). Some examples can be found <a href="https://github.com/Koenkk/zigbee2mqtt.io/tree/master/docs/externalConvertersExample" target="_blank" rel="noopener noreferrer">here</a>. For this example put the files in the <code>data</code> folder and add the following to <code>configuration.yaml</code>:</p><p>Note that external converters take precedence of standard converters</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">external_converters</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token punctuation">-</span> freepad_ext.js</span>\n<span class="line">    <span class="token punctuation">-</span> one<span class="token punctuation">-</span>more<span class="token punctuation">-</span>converter.js</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',7),l={},i=(0,s(19469).A)(l,[["render",function(n,e){const s=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t,(0,a.Lk)("p",null,[(0,a.eW)("See also "),(0,a.bF)(s,{to:"/advanced/support-new-devices/01_support_new_devices.html"},{default:(0,a.k6)((()=>[(0,a.eW)("How to support new devices")])),_:1}),(0,a.eW)(".")])])}]]),p=JSON.parse('{"path":"/guide/configuration/more-config-options.html","title":"More configuration options","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":1},"headers":[{"level":2,"title":"Network map","slug":"network-map","link":"#network-map","children":[]},{"level":2,"title":"External converters","slug":"external-converters","link":"#external-converters","children":[]}],"git":{"updatedTime":1723982720000},"filePathRelative":"guide/configuration/more-config-options.md"}')}}]);