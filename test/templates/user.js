if(!window['__micro$tpl$templates__']){window['__micro$tpl$templates__']={};}window['__micro$tpl$templates__']['user.html']="__micro$tpl$codes__.push(\\x27      <!-- 广告轮播 -->      <div class=\\x22cell-box border-spacing js-top-banner\\x22>          \\x27); include(\\x22./banner.html\\x22) __micro$tpl$codes__.push(\\x27      </div>\\x27);";if(!window['__micro$tpl$templates__']){window['__micro$tpl$templates__']={};}window['__micro$tpl$templates__']['banner.html']="__micro$tpl$codes__.push(\\x27\\x27); for ( var i = 0; i < users.length; i++ ) { __micro$tpl$codes__.push(\\x27      <li><a href=\\x22\\x27,users[i].url,\\x27\\x22>\\x27,__micro$tpl$filters__.change(__micro$tpl$filters__.add(users[i].nickname || users[i].name),8),\\x27</a></li>    \\x27); } __micro$tpl$codes__.push(\\x27\\x27);";