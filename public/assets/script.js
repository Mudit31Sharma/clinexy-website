(function(){
  var d=document, root=d.documentElement;
  root.classList.add('js-anim');

  // --- Mobile nav toggle ---
  var toggle=d.querySelector('.nav-toggle'), list=d.querySelector('.nav-list');
  if(toggle&&list){toggle.addEventListener('click',function(){list.classList.toggle('open');});}

  // --- Mega menu: tap to open on mobile, one open at a time ---
  d.querySelectorAll('.has-mega .mega-trigger').forEach(function(btn){
    btn.addEventListener('click',function(e){
      if(window.innerWidth<=900){
        e.preventDefault();
        var li=btn.parentElement;
        d.querySelectorAll('.has-mega.open').forEach(function(o){if(o!==li)o.classList.remove('open');});
        li.classList.toggle('open');
      }
    });
  });

  // --- FAQ: accordion feel (close siblings when one opens) ---
  d.querySelectorAll('.faq-list').forEach(function(listEl){
    listEl.querySelectorAll('details.faq-item').forEach(function(dt){
      dt.addEventListener('toggle',function(){
        if(dt.open){listEl.querySelectorAll('details.faq-item[open]').forEach(function(o){if(o!==dt)o.open=false;});}
      });
    });
  });

  // --- Scroll reveal (auto-applied, no per-page edits) ---
  var sel=['.section h2','.section h3','.quick-answer','.definition-box','.summary-box','.prose',
    '.split-text','.split-media','.mockup','.testimonial','.compare-table','.stat-band .stat',
    '.cards-grid>*','.photo-cards-grid>*','.related-grid>*','.plan-grid>*','.steps .step',
    '.point-list','.faq-item','.section-cta','.contact-methods>*','.diagram'];
  var seen=[], els=[];
  sel.forEach(function(s){
    d.querySelectorAll(s).forEach(function(e){
      if(e.closest('.hero')) return;        // hero animates on its own
      if(seen.indexOf(e)!==-1) return;
      seen.push(e); els.push(e); e.classList.add('reveal');
    });
  });
  // stagger grid/list children
  ['.cards-grid','.photo-cards-grid','.related-grid','.plan-grid','.stat-band'].forEach(function(gs){
    d.querySelectorAll(gs).forEach(function(g){
      Array.prototype.forEach.call(g.children,function(c,i){
        if(c.classList&&c.classList.contains('reveal')) c.style.transitionDelay=(i*0.08)+'s';
      });
    });
  });

  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');});return;}
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});
  },{threshold:0.12,rootMargin:'0px 0px -7% 0px'});
  els.forEach(function(e){io.observe(e);});
})();
