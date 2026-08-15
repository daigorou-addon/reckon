(() => {

  // ---- ナビ切り替え ----
  document.querySelectorAll('nav.tools button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('nav.tools button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.workspace').forEach(w => w.classList.remove('active'));
      document.getElementById('ws-' + btn.dataset.tool).classList.add('active');
    });
  });
  document.querySelectorAll('.home-card').forEach(card => {
    card.addEventListener('click', () => {
      const target = document.querySelector(`nav.tools button[data-tool="${card.dataset.goto}"]`);
      if(target) target.click();
    });
  });

  function todayStr(){
    const d = new Date();
    const tz = d.getTimezoneOffset()*60000;
    return new Date(d - tz).toISOString().slice(0,10);
  }
  function pad(n){ return String(n).padStart(2,'0'); }

  // ================= 年齢計算 =================
  const ageBirth = document.getElementById('ageBirth');
  const ageTarget = document.getElementById('ageTarget');
  ageTarget.value = todayStr();
  function calcAge(){
    const res = document.getElementById('ageResult');
    if(!ageBirth.value){ res.innerHTML = `<div class="result-placeholder">${t('result_placeholder')}</div>`; return; }
    const birth = new Date(ageBirth.value + 'T00:00:00');
    const target = new Date((ageTarget.value || todayStr()) + 'T00:00:00');
    if(target < birth){ res.innerHTML = `<div class="result-placeholder">${t('age_future_error')}</div>`; return; }
    let years = target.getFullYear() - birth.getFullYear();
    let months = target.getMonth() - birth.getMonth();
    let days = target.getDate() - birth.getDate();
    if(days < 0){
      months--;
      const prevMonth = new Date(target.getFullYear(), target.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if(months < 0){ years--; months += 12; }

    let nextBday = new Date(target.getFullYear(), birth.getMonth(), birth.getDate());
    if(nextBday < target || (nextBday.getMonth()===target.getMonth() && nextBday.getDate()===target.getDate() && false)) {}
    if(nextBday < target) nextBday = new Date(target.getFullYear()+1, birth.getMonth(), birth.getDate());
    const msPerDay = 86400000;
    const daysToNext = Math.round((nextBday - target)/msPerDay);
    const totalDays = Math.round((target - birth)/msPerDay);

    res.innerHTML = `
      <div class="result-main-row"><span class="result-main">${years}</span><span class="result-sub">${t('age_years_old')}</span></div>
      <div class="result-lines">
        <div class="result-line"><span class="k">${t('age_detail_label')}</span><span class="v">${years}${t('unit_years')} ${months}${t('unit_months')} ${days}${t('unit_days')}</span></div>
        <div class="result-line"><span class="k">${t('age_next_birthday')}</span><span class="v">${daysToNext===0 ? t('age_today') : daysToNext + t('unit_days')}</span></div>
        <div class="result-line"><span class="k">${t('age_total_days')}</span><span class="v">${totalDays.toLocaleString()}${t('unit_days')}</span></div>
      </div>`;
  }
  ageBirth.addEventListener('input', calcAge);
  ageTarget.addEventListener('input', calcAge);

  // ================= 日付差分計算 =================
  let datediffMode = 'diff';
  document.querySelectorAll('#datediffModeChips .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#datediffModeChips .chip').forEach(c => c.classList.remove('on'));
      chip.classList.add('on');
      datediffMode = chip.dataset.mode;
      document.getElementById('datediffDiffFields').style.display = datediffMode==='diff' ? 'grid' : 'none';
      document.getElementById('datediffAddFields').style.display = datediffMode==='add' ? 'grid' : 'none';
      calcDateDiff();
    });
  });
  document.getElementById('datediffDate1').value = todayStr();
  document.getElementById('datediffDate2').value = todayStr();
  document.getElementById('datediffBase').value = todayStr();
  function calcDateDiff(){
    const res = document.getElementById('datediffResult');
    if(datediffMode === 'diff'){
      const v1 = document.getElementById('datediffDate1').value;
      const v2 = document.getElementById('datediffDate2').value;
      if(!v1 || !v2){ res.innerHTML = `<div class="result-placeholder">${t('result_placeholder2')}</div>`; return; }
      const d1 = new Date(v1+'T00:00:00'), d2 = new Date(v2+'T00:00:00');
      const diffDays = Math.round((d2-d1)/86400000);
      const abs = Math.abs(diffDays);
      const weeks = Math.floor(abs/7);
      res.innerHTML = `
        <div class="result-main-row"><span class="result-main">${abs.toLocaleString()}</span><span class="result-sub">${t('unit_days')}</span></div>
        <div class="result-lines">
          <div class="result-line"><span class="k">${t('datediff_direction_label')}</span><span class="v">${diffDays===0 ? t('datediff_same_day') : (diffDays>0 ? t('datediff_after') : t('datediff_before'))}</span></div>
          <div class="result-line"><span class="k">${t('daysalive_weeks_label')}</span><span class="v">${weeks}${t('unit_weeks')} ${abs%7}${t('unit_days')}</span></div>
        </div>`;
    } else {
      const base = document.getElementById('datediffBase').value;
      const n = parseInt(document.getElementById('datediffDays').value)||0;
      if(!base){ res.innerHTML = `<div class="result-placeholder">${t('result_placeholder2')}</div>`; return; }
      const d = new Date(base+'T00:00:00');
      d.setDate(d.getDate()+n);
      const wd = t('weekday_names').split(',')[d.getDay()];
      res.innerHTML = `
        <div class="result-main">${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}</div>
        <div class="result-sub">${wd}</div>`;
    }
  }
  document.getElementById('datediffDate1').addEventListener('input', calcDateDiff);
  document.getElementById('datediffDate2').addEventListener('input', calcDateDiff);
  document.getElementById('datediffBase').addEventListener('input', calcDateDiff);
  document.getElementById('datediffDays').addEventListener('input', calcDateDiff);

  // ================= カウントダウン =================
  let countdownTimer = null;
  const countdownTargetEl = document.getElementById('countdownTarget');
  const countdownTitleEl = document.getElementById('countdownTitle');
  function renderCountdown(){
    const res = document.getElementById('countdownResult');
    if(!countdownTargetEl.value){
      res.innerHTML = `<div class="result-placeholder">${t('countdown_placeholder')}</div>`;
      return;
    }
    const target = new Date(countdownTargetEl.value);
    const now = new Date();
    let diff = target - now;
    const titleHtml = countdownTitleEl.value ? `<div class="countdown-title">${escapeHtml(countdownTitleEl.value)}</div>` : '';
    if(diff <= 0){
      res.innerHTML = `${titleHtml}<div class="countdown-done">${t('countdown_reached')}</div>`;
      return;
    }
    const d = Math.floor(diff/86400000); diff -= d*86400000;
    const h = Math.floor(diff/3600000); diff -= h*3600000;
    const m = Math.floor(diff/60000); diff -= m*60000;
    const s = Math.floor(diff/1000);
    res.innerHTML = `${titleHtml}<div class="countdown-grid">
      <div class="countdown-unit"><span class="countdown-num">${d}</span><span class="countdown-label">${t('unit_days_short')}</span></div>
      <div class="countdown-unit"><span class="countdown-num">${pad(h)}</span><span class="countdown-label">${t('unit_hours_short')}</span></div>
      <div class="countdown-unit"><span class="countdown-num">${pad(m)}</span><span class="countdown-label">${t('unit_minutes_short')}</span></div>
      <div class="countdown-unit"><span class="countdown-num">${pad(s)}</span><span class="countdown-label">${t('unit_seconds_short')}</span></div>
    </div>`;
  }
  function escapeHtml(s){ const d=document.createElement('div'); d.textContent=s; return d.innerHTML; }
  countdownTargetEl.addEventListener('input', renderCountdown);
  countdownTitleEl.addEventListener('input', renderCountdown);
  countdownTimer = setInterval(() => {
    if(document.getElementById('ws-countdown').classList.contains('active')) renderCountdown();
  }, 1000);

  // ================= 曜日計算 =================
  const weekdayDate = document.getElementById('weekdayDate');
  weekdayDate.value = todayStr();
  function calcWeekday(){
    const res = document.getElementById('weekdayResult');
    if(!weekdayDate.value){ res.innerHTML = `<div class="result-placeholder">${t('result_placeholder2')}</div>`; return; }
    const d = new Date(weekdayDate.value+'T00:00:00');
    const names = t('weekday_names').split(',');
    res.innerHTML = `<div class="result-main-row"><span class="result-main">${names[d.getDay()]}</span></div>`;
  }
  weekdayDate.addEventListener('input', calcWeekday);

  // ================= 時差計算 =================
  const TIMEZONES = [
    ['Asia/Tokyo','tz_tokyo'], ['Asia/Seoul','tz_seoul'], ['Asia/Shanghai','tz_shanghai'],
    ['Asia/Taipei','tz_taipei'], ['Asia/Singapore','tz_singapore'], ['Asia/Kolkata','tz_delhi'],
    ['Europe/London','tz_london'], ['Europe/Paris','tz_paris'], ['Europe/Moscow','tz_moscow'],
    ['America/New_York','tz_newyork'], ['America/Los_Angeles','tz_losangeles'], ['America/Chicago','tz_chicago'],
    ['America/Sao_Paulo','tz_saopaulo'], ['Australia/Sydney','tz_sydney'], ['Pacific/Auckland','tz_auckland'],
    ['UTC','tz_utc'],
  ];
  function populateTimezones(){
    [document.getElementById('timezoneA'), document.getElementById('timezoneB')].forEach((sel,i) => {
      sel.innerHTML = TIMEZONES.map(([tz,key]) => `<option value="${tz}">${t(key)}</option>`).join('');
      sel.value = i===0 ? 'Asia/Tokyo' : 'America/Los_Angeles';
    });
  }
  function calcTimezone(){
    const res = document.getElementById('timezoneResult');
    const tzA = document.getElementById('timezoneA').value;
    const tzB = document.getElementById('timezoneB').value;
    if(!tzA || !tzB) return;
    const now = new Date();
    const fmt = tz => new Intl.DateTimeFormat('ja-JP', {timeZone:tz, hour:'2-digit', minute:'2-digit', hour12:false, year:'numeric', month:'2-digit', day:'2-digit', weekday:'short'}).format(now);
    const offset = tz => {
      const s = new Intl.DateTimeFormat('en-US', {timeZone:tz, timeZoneName:'shortOffset'}).formatToParts(now).find(p=>p.type==='timeZoneName').value;
      return s;
    };
    const offA = offset(tzA), offB = offset(tzB);
    const getOffsetMinutes = tz => {
      const dtf = new Intl.DateTimeFormat('en-US', {timeZone:tz, hour:'2-digit', minute:'2-digit', hour12:false, timeZoneName:'shortOffset'});
      const parts = dtf.formatToParts(now);
      const tzn = parts.find(p=>p.type==='timeZoneName').value;
      const m = tzn.match(/GMT([+-]\d+)(?::(\d+))?/);
      if(!m) return 0;
      return parseInt(m[1])*60 + (m[2] ? (m[1][0]==='-'?-1:1)*parseInt(m[2]) : 0);
    };
    const diffH = (getOffsetMinutes(tzB) - getOffsetMinutes(tzA))/60;
    res.innerHTML = `
      <div class="result-lines">
        <div class="result-line"><span class="k">${t(TIMEZONES.find(z=>z[0]===tzA)[1])} (${offA})</span><span class="v">${fmt(tzA)}</span></div>
        <div class="result-line"><span class="k">${t(TIMEZONES.find(z=>z[0]===tzB)[1])} (${offB})</span><span class="v">${fmt(tzB)}</span></div>
      </div>
      <div class="result-main-row" style="margin-top:14px;"><span class="result-main">${diffH>=0?'+':''}${diffH}</span><span class="result-sub">${t('timezone_diff_hours')}</span></div>`;
  }
  document.getElementById('timezoneA').addEventListener('change', calcTimezone);
  document.getElementById('timezoneB').addEventListener('change', calcTimezone);
  setInterval(() => { if(document.getElementById('ws-timezone').classList.contains('active')) calcTimezone(); }, 1000);

  // ================= 干支・十二支 =================
  const ZODIAC_ANIMALS_KEYS = ['zodiac_rat','zodiac_ox','zodiac_tiger','zodiac_rabbit','zodiac_dragon','zodiac_snake','zodiac_horse','zodiac_goat','zodiac_monkey','zodiac_rooster','zodiac_dog','zodiac_pig'];
  const KAN_KEYS = ['kan_ko','kan_otsu','kan_hei','kan_tei','kan_bo','kan_ki','kan_kou','kan_shin','kan_jin','kan_ki2'];
  function calcZodiac(){
    const res = document.getElementById('zodiacResult');
    const yearInput = document.getElementById('zodiacYear').value;
    if(!yearInput){ res.innerHTML = `<div class="result-placeholder">${t('zodiac_placeholder')}</div>`; return; }
    const year = parseInt(yearInput);
    const animalIdx = ((year - 4) % 12 + 12) % 12;
    const kanIdx = ((year - 4) % 10 + 10) % 10;
    res.innerHTML = `
      <div class="result-main-row"><span class="result-main">${t(ZODIAC_ANIMALS_KEYS[animalIdx])}</span></div>
      <div class="result-lines">
        <div class="result-line"><span class="k">${t('zodiac_kanshi_label')}</span><span class="v">${t(KAN_KEYS[kanIdx])}${t(ZODIAC_ANIMALS_KEYS[animalIdx])}</span></div>
      </div>`;
  }
  document.getElementById('zodiacYear').addEventListener('input', calcZodiac);

  // ================= 電卓 =================
  let calcSci = false;
  let calcExpr = '';
  const calcDisplay = document.getElementById('calcDisplay');
  document.getElementById('calcModeBasic').addEventListener('click', () => setCalcMode(false));
  document.getElementById('calcModeSci').addEventListener('click', () => setCalcMode(true));
  function setCalcMode(sci){
    calcSci = sci;
    document.getElementById('calcModeBasic').classList.toggle('on', !sci);
    document.getElementById('calcModeSci').classList.toggle('on', sci);
    document.getElementById('calcGridSci').style.display = sci ? 'grid' : 'none';
  }
  const BASIC_BTNS = [
    ['C','clear'],['⌫','back'],['%','pct'],['÷','op:/'],
    ['7','d'],['8','d'],['9','d'],['×','op:*'],
    ['4','d'],['5','d'],['6','d'],['−','op:-'],
    ['1','d'],['2','d'],['3','d'],['+','op:+'],
    ['0','d0'],['.','d'],['=','eq'],
  ];
  const SCI_BTNS = [
    ['sin','fn:sin'],['cos','fn:cos'],['tan','fn:tan'],['√','fn:sqrt'],
    ['log','fn:log10'],['ln','fn:log'],['x²','fn:sq'],['^','op:**'],
    ['π','const:pi'],['e','const:e'],['(','d'],[')','d'],
  ];
  function buildCalcGrid(el, defs){
    el.innerHTML = '';
    defs.forEach(([label, action]) => {
      const btn = document.createElement('button');
      btn.className = 'calc-btn' + (action.startsWith('op:') ? ' op' : '') + (action==='eq' ? ' eq' : '') + (label==='0' ? ' wide' : '');
      btn.textContent = label;
      btn.addEventListener('click', () => handleCalcBtn(label, action));
      el.appendChild(btn);
    });
  }
  function handleCalcBtn(label, action){
    if(action === 'clear'){ calcExpr = ''; }
    else if(action === 'back'){ calcExpr = calcExpr.slice(0,-1); }
    else if(action === 'eq'){
      try{
        const safe = calcExpr.replace(/×/g,'*').replace(/÷/g,'/').replace(/−/g,'-');
        const val = Function('"use strict";return (' + safe + ')')();
        calcExpr = String(Number.isFinite(val) ? +val.toPrecision(12) : t('calc_error'));
      } catch(e){ calcExpr = t('calc_error'); }
    }
    else if(action === 'pct'){
      try{ const val = Function('"use strict";return (' + calcExpr.replace(/×/g,'*').replace(/÷/g,'/').replace(/−/g,'-') + ')')(); calcExpr = String(val/100); } catch(e){}
    }
    else if(action.startsWith('op:')){ calcExpr += label; }
    else if(action.startsWith('fn:')){
      const fn = action.slice(3);
      try{
        const cur = Function('"use strict";return (' + calcExpr.replace(/×/g,'*').replace(/÷/g,'/').replace(/−/g,'-') + ')')();
        let val;
        if(fn==='sin') val = Math.sin(cur*Math.PI/180);
        else if(fn==='cos') val = Math.cos(cur*Math.PI/180);
        else if(fn==='tan') val = Math.tan(cur*Math.PI/180);
        else if(fn==='sqrt') val = Math.sqrt(cur);
        else if(fn==='log10') val = Math.log10(cur);
        else if(fn==='log') val = Math.log(cur);
        else if(fn==='sq') val = cur*cur;
        calcExpr = String(+val.toPrecision(12));
      } catch(e){ calcExpr = t('calc_error'); }
    }
    else if(action.startsWith('const:')){
      calcExpr += (action==='const:pi' ? Math.PI.toString() : Math.E.toString());
    }
    else { calcExpr += label; }
    calcDisplay.value = calcExpr || '0';
  }
  buildCalcGrid(document.getElementById('calcGridBasic'), BASIC_BTNS);
  buildCalcGrid(document.getElementById('calcGridSci'), SCI_BTNS);

  // ================= 割り勘計算 =================
  const splitTotal = document.getElementById('splitTotal');
  const splitPeople = document.getElementById('splitPeople');
  let splitRound = 'up';
  document.querySelectorAll('#splitRoundChips .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#splitRoundChips .chip').forEach(c => c.classList.remove('on'));
      chip.classList.add('on');
      splitRound = chip.dataset.r;
      calcSplit();
    });
  });
  document.getElementById('splitOrganizerMore').addEventListener('change', calcSplit);
  function calcSplit(){
    const res = document.getElementById('splitResult');
    const total = parseFloat(splitTotal.value)||0;
    const people = parseInt(splitPeople.value)||1;
    const organizerLess = document.getElementById('splitOrganizerMore').checked;
    const roundFn = splitRound==='up' ? Math.ceil : (splitRound==='down' ? Math.floor : Math.round);
    if(!organizerLess){
      const per = roundFn(total/people/10)*10;
      const remainder = total - per*people;
      res.innerHTML = `
        <div class="result-main-row"><span class="result-main">${Math.round(per).toLocaleString()}</span><span class="result-sub">${t('splitbill_per_person')}</span></div>
        <div class="result-lines">
          <div class="result-line"><span class="k">${t('splitbill_remainder_label')}</span><span class="v">${Math.round(remainder).toLocaleString()}</span></div>
        </div>`;
    } else {
      const others = people - 1;
      if(others < 1){ res.innerHTML = `<div class="result-placeholder">${t('splitbill_need_two')}</div>`; return; }
      const otherShareTotal = total * (people) / (people + 1);
      const perOther = roundFn(otherShareTotal/others/10)*10;
      const organizerShare = total - perOther*others;
      res.innerHTML = `
        <div class="result-lines">
          <div class="result-line"><span class="k">${t('splitbill_others_label')}</span><span class="v">${Math.round(perOther).toLocaleString()} × ${others}${t('unit_people')}</span></div>
          <div class="result-line"><span class="k">${t('splitbill_organizer_share_label')}</span><span class="v">${Math.round(organizerShare).toLocaleString()}</span></div>
        </div>`;
    }
  }
  [splitTotal, splitPeople].forEach(el => el.addEventListener('input', calcSplit));

  // ================= パーセント計算 =================
  let percentMode = 'ratio';
  const percentConfigs = {
    ratio: [['percentA','percent_a_label'], ['percentB','percent_b_label']],
    value: [['percentA','percent_pct_label'], ['percentB','percent_base_label']],
    discount: [['percentA','percent_price_label'], ['percentB','percent_discount_label']],
    change: [['percentA','percent_before_label'], ['percentB','percent_after_label']],
  };
  document.querySelectorAll('#percentModeChips .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#percentModeChips .chip').forEach(c => c.classList.remove('on'));
      chip.classList.add('on');
      percentMode = chip.dataset.m;
      renderPercentFields();
    });
  });
  function renderPercentFields(){
    const wrap = document.getElementById('percentFields');
    const cfg = percentConfigs[percentMode];
    wrap.innerHTML = cfg.map(([id,labelKey]) => `<div class="field"><label data-i18n="${labelKey}">${t(labelKey)}</label><input type="number" id="${id}" value="${id==='percentA'?10:10}"></div>`).join('');
    document.getElementById('percentA').addEventListener('input', calcPercent);
    document.getElementById('percentB').addEventListener('input', calcPercent);
    calcPercent();
  }
  function calcPercent(){
    const res = document.getElementById('percentResult');
    const a = parseFloat(document.getElementById('percentA').value);
    const b = parseFloat(document.getElementById('percentB').value);
    if(isNaN(a) || isNaN(b)){ res.innerHTML=''; return; }
    let mainVal, subLabel;
    if(percentMode==='ratio'){ mainVal = (a/b*100); subLabel = '%'; }
    else if(percentMode==='value'){ mainVal = (a/100*b); subLabel = ''; }
    else if(percentMode==='discount'){ mainVal = a*(1-b/100); subLabel = ''; }
    else if(percentMode==='change'){ mainVal = ((b-a)/a*100); subLabel = '%'; }
    const rounded = Math.round(mainVal*100)/100;
    res.innerHTML = `<div class="result-main-row"><span class="result-main">${rounded.toLocaleString()}</span><span class="result-sub">${subLabel}</span></div>`;
  }
  renderPercentFields();

  // ================= 単位変換 =================
  const UNIT_DATA = {
    length: { base:'m', units:{ mm:0.001, cm:0.01, m:1, km:1000, inch:0.0254, ft:0.3048, yard:0.9144, mile:1609.344 } },
    weight: { base:'kg', units:{ mg:0.000001, g:0.001, kg:1, t:1000, oz:0.0283495, lb:0.453592 } },
    area: { base:'m2', units:{ m2:1, km2:1000000, cm2:0.0001, ha:10000, tsubo:3.30579, acre:4046.86 } },
    volume: { base:'l', units:{ ml:0.001, l:1, m3:1000, gal:3.78541, cup:0.236588 } },
  };
  function populateUnitSelects(){
    const cat = document.querySelector('#unitCategoryChips .chip.on').dataset.c;
    const fromSel = document.getElementById('unitFrom'), toSel = document.getElementById('unitTo');
    if(cat === 'temp'){
      const opts = ['celsius','fahrenheit','kelvin'];
      fromSel.innerHTML = opts.map(u => `<option value="${u}">${t('unit_'+u)}</option>`).join('');
      toSel.innerHTML = opts.map(u => `<option value="${u}">${t('unit_'+u)}</option>`).join('');
      fromSel.value = 'celsius'; toSel.value = 'fahrenheit';
    } else {
      const units = Object.keys(UNIT_DATA[cat].units);
      fromSel.innerHTML = units.map(u => `<option value="${u}">${t('unit_'+u)}</option>`).join('');
      toSel.innerHTML = units.map(u => `<option value="${u}">${t('unit_'+u)}</option>`).join('');
      fromSel.value = units[0]; toSel.value = units[1];
    }
    calcUnitConvert();
  }
  document.querySelectorAll('#unitCategoryChips .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#unitCategoryChips .chip').forEach(c => c.classList.remove('on'));
      chip.classList.add('on');
      populateUnitSelects();
    });
  });
  function convertTemp(val, from, to){
    let celsius;
    if(from==='celsius') celsius = val;
    else if(from==='fahrenheit') celsius = (val-32)*5/9;
    else celsius = val - 273.15;
    if(to==='celsius') return celsius;
    if(to==='fahrenheit') return celsius*9/5+32;
    return celsius + 273.15;
  }
  function calcUnitConvert(){
    const res = document.getElementById('unitResult');
    const cat = document.querySelector('#unitCategoryChips .chip.on').dataset.c;
    const val = parseFloat(document.getElementById('unitValue').value);
    const from = document.getElementById('unitFrom').value, to = document.getElementById('unitTo').value;
    if(isNaN(val)){ res.innerHTML=''; return; }
    let out;
    if(cat==='temp'){ out = convertTemp(val, from, to); }
    else {
      const data = UNIT_DATA[cat];
      out = val * data.units[from] / data.units[to];
    }
    const rounded = Math.round(out*100000)/100000;
    res.innerHTML = `<div class="result-main-row"><span class="result-main">${rounded.toLocaleString(undefined,{maximumFractionDigits:5})}</span><span class="result-sub">${t('unit_'+to)}</span></div>`;
  }
  document.getElementById('unitValue').addEventListener('input', calcUnitConvert);
  document.getElementById('unitFrom').addEventListener('change', calcUnitConvert);
  document.getElementById('unitTo').addEventListener('change', calcUnitConvert);
  populateUnitSelects();

  // ================= 進数変換 =================
  const baseValue = document.getElementById('baseValue');
  const baseFrom = document.getElementById('baseFrom');
  function calcBaseConvert(){
    const res = document.getElementById('baseResult');
    const from = parseInt(baseFrom.value);
    const raw = baseValue.value.trim();
    if(!raw){ res.innerHTML=''; return; }
    const num = parseInt(raw, from);
    if(isNaN(num)){ res.innerHTML = `<div class="result-placeholder">${t('base_invalid')}</div>`; return; }
    let ascii = '';
    if(num >= 0 && num <= 0x10FFFF){
      try{ ascii = String.fromCodePoint(num); } catch(e){ ascii = '-'; }
    }
    res.innerHTML = `
      <div class="result-lines">
        <div class="result-line"><span class="k">2進数</span><span class="v">${num.toString(2)}</span></div>
        <div class="result-line"><span class="k">8進数</span><span class="v">${num.toString(8)}</span></div>
        <div class="result-line"><span class="k">10進数</span><span class="v">${num.toString(10)}</span></div>
        <div class="result-line"><span class="k">16進数</span><span class="v">${num.toString(16).toUpperCase()}</span></div>
        <div class="result-line"><span class="k">ASCII/Unicode</span><span class="v">${ascii || '-'}</span></div>
      </div>`;
  }
  baseValue.addEventListener('input', calcBaseConvert);
  baseFrom.addEventListener('change', calcBaseConvert);
  calcBaseConvert();

  // ================= 二次方程式 =================
  ['quadA','quadB','quadC'].forEach(id => document.getElementById(id).addEventListener('input', calcQuadratic));
  function calcQuadratic(){
    const res = document.getElementById('quadResult');
    const a = parseFloat(document.getElementById('quadA').value);
    const b = parseFloat(document.getElementById('quadB').value);
    const c = parseFloat(document.getElementById('quadC').value);
    if(isNaN(a) || isNaN(b) || isNaN(c)){ res.innerHTML=''; return; }
    if(a === 0){ res.innerHTML = `<div class="result-placeholder">${t('quad_not_quadratic')}</div>`; return; }
    const disc = b*b - 4*a*c;
    if(disc > 0){
      const x1 = (-b + Math.sqrt(disc))/(2*a);
      const x2 = (-b - Math.sqrt(disc))/(2*a);
      res.innerHTML = `<div class="result-lines">
        <div class="result-line"><span class="k">x1</span><span class="v">${(+x1.toPrecision(8))}</span></div>
        <div class="result-line"><span class="k">x2</span><span class="v">${(+x2.toPrecision(8))}</span></div>
        <div class="result-line"><span class="k">${t('quad_discriminant')}</span><span class="v">${disc}</span></div>
      </div>`;
    } else if(disc === 0){
      const x = -b/(2*a);
      res.innerHTML = `<div class="result-lines">
        <div class="result-line"><span class="k">x</span><span class="v">${(+x.toPrecision(8))}</span></div>
        <div class="result-line"><span class="k">${t('quad_discriminant')}</span><span class="v">0</span></div>
      </div>`;
    } else {
      const re = -b/(2*a);
      const im = Math.sqrt(-disc)/(2*a);
      res.innerHTML = `<div class="result-lines">
        <div class="result-line"><span class="k">x1</span><span class="v">${(+re.toPrecision(6))} + ${(+im.toPrecision(6))}i</span></div>
        <div class="result-line"><span class="k">x2</span><span class="v">${(+re.toPrecision(6))} - ${(+im.toPrecision(6))}i</span></div>
        <div class="result-line"><span class="k">${t('quad_discriminant')}</span><span class="v">${disc}</span></div>
      </div>`;
    }
  }
  calcQuadratic();

  // ================= BMI計算 =================
  ['bmiHeight','bmiWeight'].forEach(id => document.getElementById(id).addEventListener('input', calcBmi));
  function calcBmi(){
    const res = document.getElementById('bmiResult');
    const h = parseFloat(document.getElementById('bmiHeight').value)/100;
    const w = parseFloat(document.getElementById('bmiWeight').value);
    if(!h || !w){ res.innerHTML=''; return; }
    const bmi = w/(h*h);
    let cat;
    if(bmi < 18.5) cat = t('bmi_low');
    else if(bmi < 25) cat = t('bmi_normal');
    else if(bmi < 30) cat = t('bmi_high');
    else cat = t('bmi_veryhigh');
    const idealMin = (18.5*h*h).toFixed(1);
    const idealMax = (24.9*h*h).toFixed(1);
    res.innerHTML = `
      <div class="result-main-row"><span class="result-main">${bmi.toFixed(1)}</span><span class="result-sub">${cat}</span></div>
      <div class="result-lines">
        <div class="result-line"><span class="k">${t('bmi_ideal_range')}</span><span class="v">${idealMin} - ${idealMax} kg</span></div>
      </div>`;
  }
  calcBmi();

  // ================= 消費カロリー =================
  const MET_ACTIVITIES = [
    ['walking', 3.5], ['jogging', 7.0], ['running', 9.8], ['cycling', 6.0],
    ['swimming', 8.0], ['yoga', 2.5], ['strength', 5.0], ['dancing', 5.5],
  ];
  function populateActivities(){
    const sel = document.getElementById('calorieActivity');
    sel.innerHTML = MET_ACTIVITIES.map(([key]) => `<option value="${key}">${t('activity_'+key)}</option>`).join('');
    calcCalorie();
  }
  function calcCalorie(){
    const res = document.getElementById('calorieResult');
    const w = parseFloat(document.getElementById('calorieWeight').value);
    const dur = parseFloat(document.getElementById('calorieDuration').value);
    const activity = document.getElementById('calorieActivity').value;
    const met = MET_ACTIVITIES.find(a => a[0]===activity);
    if(!w || !dur || !met){ res.innerHTML=''; return; }
    const kcal = met[1] * w * (dur/60);
    res.innerHTML = `<div class="result-main-row"><span class="result-main">${Math.round(kcal).toLocaleString()}</span><span class="result-sub">kcal</span></div>`;
  }
  ['calorieWeight','calorieDuration'].forEach(id => document.getElementById(id).addEventListener('input', calcCalorie));
  document.getElementById('calorieActivity').addEventListener('change', calcCalorie);

  // ---- 初期化・言語切替時の再計算 ----
  window.reckonRecalcAll = function(){
    populateTimezones();
    calcAge(); calcDateDiff(); renderCountdown(); calcWeekday();
    calcTimezone(); calcZodiac(); calcSplit(); renderPercentFields(); populateUnitSelects();
    calcBaseConvert(); calcQuadratic(); calcBmi(); populateActivities();
  };
  window.reckonRecalcAll();

})();
