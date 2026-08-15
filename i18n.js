/* ===================================================================
   Reckon — 多言語対応（i18n）
   対応言語: 日本語 / English / 한국어 / 简体中文 / 繁體中文 / Español
=================================================================== */

const I18N = {

ja: {
  page_title: "Reckon — 各種計算",
  badge_local: "local-only",
  brand_name: "各種計算",
  app_tagline: "すべての計算はブラウザ内で完結します。",
  back_to_top: "← Daigorou-Toolsに戻る",
  footer_text: "すべての計算はこの端末内で行われます。入力内容はどこにも送信されません。",

  nav_home: "ホーム",
  nav_label_date: "日付・時間", nav_label_math: "計算・数学", nav_label_health: "健康",
  nav_age: "年齢計算", nav_datediff: "日付差分計算",
  nav_countdown: "カウントダウン", nav_weekday: "曜日計算", nav_timezone: "時差計算", nav_zodiac: "干支・十二支",
  nav_calc: "電卓", nav_splitbill: "割り勘計算", nav_percent: "パーセント計算",
  nav_unitconvert: "単位変換", nav_baseconvert: "進数変換", nav_quadratic: "二次方程式",
  nav_bmi: "BMI計算", nav_calorie: "消費カロリー",

  home_title: "Reckonへようこそ",
  home_lead: "使いたい計算ツールを選んでください。入力した内容は送信されず、この端末の中だけで計算されます。",
  home_tag_date: "DATE", home_tag_math: "MATH", home_tag_health: "HEALTH",
  home_desc_age: "生年月日から今の年齢と、次の誕生日までの日数を出す",
  home_desc_datediff: "2つの日付の差、またはN日後・N日前の日付を出す",
  home_desc_countdown: "配信開始やイベントまでの残り時間を表示する",
  home_desc_weekday: "指定した日付の曜日を調べる",
  home_desc_timezone: "2つの都市の現在時刻と時差を比較する",
  home_desc_zodiac: "生まれ年から十二支と干支を調べる",
  home_desc_calc: "基本計算と関数電卓モード",
  home_desc_splitbill: "端数調整・幹事多めにも対応",
  home_desc_percent: "割引後の価格や増減率をまとめて計算",
  home_desc_unitconvert: "長さ・重さ・温度・面積・体積を変換",
  home_desc_baseconvert: "2進数・8進数・10進数・16進数・ASCII",
  home_desc_quadratic: "ax²+bx+c=0 の解を求める",
  home_desc_bmi: "身長・体重からBMIと適正体重を出す",
  home_desc_calorie: "運動の種類・時間から消費カロリーを出す",

  result_placeholder: "生年月日を入力してください",
  result_placeholder2: "日付を入力してください",
  result_placeholder3: "都市を選んでください",

  age_birth_label: "生年月日", age_target_label: "基準日",
  age_future_error: "基準日は生年月日より後にしてください",
  age_years_old: "歳", age_detail_label: "詳細",
  age_next_birthday: "次の誕生日まで", age_today: "本日",
  age_total_days: "生きた日数",
  unit_years: "年", unit_months: "ヶ月", unit_days: "日", unit_weeks: "週間", unit_people: "人", daysalive_weeks_label: "週数換算",

  datediff_mode_diff: "2つの日付の差", datediff_mode_add: "指定日数後/前",
  datediff_date1_label: "日付1", datediff_date2_label: "日付2",
  datediff_base_label: "基準日", datediff_days_label: "日数（マイナスで前）",
  datediff_direction_label: "関係", datediff_same_day: "同じ日",
  datediff_after: "日付2は日付1より後", datediff_before: "日付2は日付1より前",

  countdown_target_label: "目標日時", countdown_title_label: "タイトル（任意）",
  countdown_placeholder: "目標日時を入力してください", countdown_reached: "時間になりました！",
  unit_days_short: "日", unit_hours_short: "時間", unit_minutes_short: "分", unit_seconds_short: "秒",

  weekday_date_label: "日付", weekday_names: "日曜日,月曜日,火曜日,水曜日,木曜日,金曜日,土曜日",

  timezone_a_label: "都市A", timezone_b_label: "都市B", timezone_diff_hours: "時間差",
  tz_tokyo: "東京", tz_seoul: "ソウル", tz_shanghai: "上海", tz_taipei: "台北",
  tz_singapore: "シンガポール", tz_delhi: "デリー", tz_london: "ロンドン", tz_paris: "パリ",
  tz_moscow: "モスクワ", tz_newyork: "ニューヨーク", tz_losangeles: "ロサンゼルス", tz_chicago: "シカゴ",
  tz_saopaulo: "サンパウロ", tz_sydney: "シドニー", tz_auckland: "オークランド", tz_utc: "UTC",

  zodiac_year_label: "生まれた年", zodiac_placeholder: "年を入力してください",
  zodiac_kanshi_label: "干支（十干十二支）",
  zodiac_rat: "子（ねずみ）", zodiac_ox: "丑（うし）", zodiac_tiger: "寅（とら）", zodiac_rabbit: "卯（うさぎ）",
  zodiac_dragon: "辰（たつ）", zodiac_snake: "巳（へび）", zodiac_horse: "午（うま）", zodiac_goat: "未（ひつじ）",
  zodiac_monkey: "申（さる）", zodiac_rooster: "酉（とり）", zodiac_dog: "戌（いぬ）", zodiac_pig: "亥（いのしし）",
  kan_ko: "甲", kan_otsu: "乙", kan_hei: "丙", kan_tei: "丁", kan_bo: "戊",
  kan_ki: "己", kan_kou: "庚", kan_shin: "辛", kan_jin: "壬", kan_ki2: "癸",

  calc_mode_basic: "標準", calc_mode_sci: "関数電卓", calc_error: "エラー",

  splitbill_total_label: "合計金額", splitbill_people_label: "人数",
  splitbill_round_label: "端数の扱い", splitbill_round_up: "切り上げ", splitbill_round_down: "切り捨て", splitbill_round_nearest: "四捨五入",
  splitbill_organizer_label: "幹事は少なめに払う", splitbill_per_person: "1人あたり",
  splitbill_remainder_label: "端数（幹事負担）", splitbill_need_two: "2人以上で計算してください",
  splitbill_others_label: "他のメンバー", splitbill_organizer_share_label: "幹事の負担額",

  percent_mode_ratio: "AはBの何%", percent_mode_value: "Aの何%はいくつ",
  percent_mode_discount: "割引後の価格", percent_mode_change: "増減率",
  percent_a_label: "A", percent_b_label: "B",
  percent_pct_label: "パーセント (%)", percent_base_label: "基準の数値",
  percent_price_label: "元の価格", percent_discount_label: "割引率 (%)",
  percent_before_label: "変化前の値", percent_after_label: "変化後の値",

  unit_cat_length: "長さ", unit_cat_weight: "重さ", unit_cat_temp: "温度", unit_cat_area: "面積", unit_cat_volume: "体積",
  unit_value_label: "数値", unit_from_label: "変換前", unit_to_label: "変換後",
  unit_mm: "ミリメートル", unit_cm: "センチメートル", unit_m: "メートル", unit_km: "キロメートル",
  unit_inch: "インチ", unit_ft: "フィート", unit_yard: "ヤード", unit_mile: "マイル",
  unit_mg: "ミリグラム", unit_g: "グラム", unit_kg: "キログラム", unit_t: "トン", unit_oz: "オンス", unit_lb: "ポンド",
  unit_m2: "平方メートル", unit_km2: "平方キロメートル", unit_cm2: "平方センチメートル", unit_ha: "ヘクタール", unit_tsubo: "坪", unit_acre: "エーカー",
  unit_ml: "ミリリットル", unit_l: "リットル", unit_m3: "立方メートル", unit_gal: "ガロン", unit_cup: "カップ",
  unit_celsius: "摂氏 (℃)", unit_fahrenheit: "華氏 (℉)", unit_kelvin: "ケルビン (K)",

  base_value_label: "数値", base_from_label: "入力の基数", base_invalid: "無効な数値です",

  quad_discriminant: "判別式", quad_not_quadratic: "a は 0 以外にしてください",

  bmi_height_label: "身長 (cm)", bmi_weight_label: "体重 (kg)",
  bmi_low: "低体重", bmi_normal: "普通体重", bmi_high: "肥満(軽度)", bmi_veryhigh: "肥満",
  bmi_ideal_range: "適正体重の目安",

  calorie_weight_label: "体重 (kg)", calorie_activity_label: "運動の種類", calorie_duration_label: "時間 (分)",
  activity_walking: "ウォーキング", activity_jogging: "ジョギング", activity_running: "ランニング",
  activity_cycling: "サイクリング", activity_swimming: "水泳", activity_yoga: "ヨガ",
  activity_strength: "筋力トレーニング", activity_dancing: "ダンス",
},

en: {
  page_title: "Reckon — Calculators",
  badge_local: "local-only",
  brand_name: "Reckon",
  app_tagline: "Every calculation runs in your browser.",
  back_to_top: "← Back to Daigorou-Tools",
  footer_text: "Everything runs on this device. Nothing you enter is ever sent anywhere.",

  nav_home: "Home",
  nav_label_date: "Date & Time", nav_label_math: "Math", nav_label_health: "Health",
  nav_age: "Age Calculator", nav_datediff: "Date Difference",
  nav_countdown: "Countdown", nav_weekday: "Day of Week", nav_timezone: "Time Zones", nav_zodiac: "Chinese Zodiac",
  nav_calc: "Calculator", nav_splitbill: "Split the Bill", nav_percent: "Percentage",
  nav_unitconvert: "Unit Converter", nav_baseconvert: "Base Converter", nav_quadratic: "Quadratic Equation",
  nav_bmi: "BMI Calculator", nav_calorie: "Calories Burned",

  home_title: "Welcome to Reckon",
  home_lead: "Pick a calculator to get started. Nothing you enter is sent anywhere — everything runs on this device.",
  home_tag_date: "DATE", home_tag_math: "MATH", home_tag_health: "HEALTH",
  home_desc_age: "Get your current age and days until your next birthday",
  home_desc_datediff: "Find the difference between two dates, or a date N days away",
  home_desc_countdown: "Show the time remaining until a stream or event",
  home_desc_weekday: "Find what day of the week a date falls on",
  home_desc_timezone: "Compare the current time and difference between two cities",
  home_desc_zodiac: "Find your Chinese zodiac animal and sexagenary cycle",
  home_desc_calc: "Basic calculator with a scientific mode",
  home_desc_splitbill: "Supports rounding and a lighter share for the organizer",
  home_desc_percent: "Discounted prices, percentage change, and more",
  home_desc_unitconvert: "Convert length, weight, temperature, area, and volume",
  home_desc_baseconvert: "Binary, octal, decimal, hex, and ASCII",
  home_desc_quadratic: "Solve for x in ax²+bx+c=0",
  home_desc_bmi: "Get your BMI and healthy weight range from height and weight",
  home_desc_calorie: "Estimate calories burned by activity type and duration",

  result_placeholder: "Enter a date of birth",
  result_placeholder2: "Enter a date",
  result_placeholder3: "Choose a city",

  age_birth_label: "Date of birth", age_target_label: "As of",
  age_future_error: "The target date must be after the date of birth",
  age_years_old: "years old", age_detail_label: "Detail",
  age_next_birthday: "Until next birthday", age_today: "Today",
  age_total_days: "Days lived",
  unit_years: " yr", unit_months: " mo", unit_days: " days", unit_weeks: " wk", unit_people: " people", daysalive_weeks_label: "In weeks",

  datediff_mode_diff: "Difference between two dates", datediff_mode_add: "N days before/after",
  datediff_date1_label: "Date 1", datediff_date2_label: "Date 2",
  datediff_base_label: "Base date", datediff_days_label: "Days (negative = before)",
  datediff_direction_label: "Relation", datediff_same_day: "Same day",
  datediff_after: "Date 2 is after Date 1", datediff_before: "Date 2 is before Date 1",

  countdown_target_label: "Target date & time", countdown_title_label: "Title (optional)",
  countdown_placeholder: "Enter a target date and time", countdown_reached: "Time's up!",
  unit_days_short: "days", unit_hours_short: "hrs", unit_minutes_short: "min", unit_seconds_short: "sec",

  weekday_date_label: "Date", weekday_names: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",

  timezone_a_label: "City A", timezone_b_label: "City B", timezone_diff_hours: "hour difference",
  tz_tokyo: "Tokyo", tz_seoul: "Seoul", tz_shanghai: "Shanghai", tz_taipei: "Taipei",
  tz_singapore: "Singapore", tz_delhi: "Delhi", tz_london: "London", tz_paris: "Paris",
  tz_moscow: "Moscow", tz_newyork: "New York", tz_losangeles: "Los Angeles", tz_chicago: "Chicago",
  tz_saopaulo: "São Paulo", tz_sydney: "Sydney", tz_auckland: "Auckland", tz_utc: "UTC",

  zodiac_year_label: "Birth year", zodiac_placeholder: "Enter a year",
  zodiac_kanshi_label: "Sexagenary cycle",
  zodiac_rat: "Rat", zodiac_ox: "Ox", zodiac_tiger: "Tiger", zodiac_rabbit: "Rabbit",
  zodiac_dragon: "Dragon", zodiac_snake: "Snake", zodiac_horse: "Horse", zodiac_goat: "Goat",
  zodiac_monkey: "Monkey", zodiac_rooster: "Rooster", zodiac_dog: "Dog", zodiac_pig: "Pig",
  kan_ko: "Jia", kan_otsu: "Yi", kan_hei: "Bing", kan_tei: "Ding", kan_bo: "Wu",
  kan_ki: "Ji", kan_kou: "Geng", kan_shin: "Xin", kan_jin: "Ren", kan_ki2: "Gui",

  calc_mode_basic: "Standard", calc_mode_sci: "Scientific", calc_error: "Error",

  splitbill_total_label: "Total amount", splitbill_people_label: "Number of people",
  splitbill_round_label: "Rounding", splitbill_round_up: "Round up", splitbill_round_down: "Round down", splitbill_round_nearest: "Round to nearest",
  splitbill_organizer_label: "Organizer pays less", splitbill_per_person: "per person",
  splitbill_remainder_label: "Remainder (organizer covers)", splitbill_need_two: "Needs at least 2 people",
  splitbill_others_label: "Other members", splitbill_organizer_share_label: "Organizer's share",

  percent_mode_ratio: "What % is A of B", percent_mode_value: "What is X% of A",
  percent_mode_discount: "Discounted price", percent_mode_change: "Percentage change",
  percent_a_label: "A", percent_b_label: "B",
  percent_pct_label: "Percentage (%)", percent_base_label: "Base value",
  percent_price_label: "Original price", percent_discount_label: "Discount (%)",
  percent_before_label: "Value before", percent_after_label: "Value after",

  unit_cat_length: "Length", unit_cat_weight: "Weight", unit_cat_temp: "Temperature", unit_cat_area: "Area", unit_cat_volume: "Volume",
  unit_value_label: "Value", unit_from_label: "From", unit_to_label: "To",
  unit_mm: "Millimeter", unit_cm: "Centimeter", unit_m: "Meter", unit_km: "Kilometer",
  unit_inch: "Inch", unit_ft: "Foot", unit_yard: "Yard", unit_mile: "Mile",
  unit_mg: "Milligram", unit_g: "Gram", unit_kg: "Kilogram", unit_t: "Ton", unit_oz: "Ounce", unit_lb: "Pound",
  unit_m2: "Square meter", unit_km2: "Square kilometer", unit_cm2: "Square centimeter", unit_ha: "Hectare", unit_tsubo: "Tsubo", unit_acre: "Acre",
  unit_ml: "Milliliter", unit_l: "Liter", unit_m3: "Cubic meter", unit_gal: "Gallon", unit_cup: "Cup",
  unit_celsius: "Celsius (°C)", unit_fahrenheit: "Fahrenheit (°F)", unit_kelvin: "Kelvin (K)",

  base_value_label: "Value", base_from_label: "Input base", base_invalid: "Invalid number",

  quad_discriminant: "Discriminant", quad_not_quadratic: "a must not be 0",

  bmi_height_label: "Height (cm)", bmi_weight_label: "Weight (kg)",
  bmi_low: "Underweight", bmi_normal: "Normal weight", bmi_high: "Overweight", bmi_veryhigh: "Obese",
  bmi_ideal_range: "Healthy weight range",

  calorie_weight_label: "Weight (kg)", calorie_activity_label: "Activity", calorie_duration_label: "Duration (min)",
  activity_walking: "Walking", activity_jogging: "Jogging", activity_running: "Running",
  activity_cycling: "Cycling", activity_swimming: "Swimming", activity_yoga: "Yoga",
  activity_strength: "Strength training", activity_dancing: "Dancing",
},

ko: {
  page_title: "Reckon — 각종 계산",
  badge_local: "local-only",
  brand_name: "각종 계산",
  app_tagline: "모든 계산은 브라우저 안에서 완결됩니다.",
  back_to_top: "← Daigorou-Tools로 돌아가기",
  footer_text: "모든 계산은 이 기기 안에서 이루어집니다. 입력한 내용은 어디로도 전송되지 않습니다.",

  nav_home: "홈",
  nav_label_date: "날짜·시간", nav_label_math: "계산·수학", nav_label_health: "건강",
  nav_age: "나이 계산", nav_datediff: "날짜 차이 계산",
  nav_countdown: "카운트다운", nav_weekday: "요일 계산", nav_timezone: "시차 계산", nav_zodiac: "띠·간지",
  nav_calc: "계산기", nav_splitbill: "더치페이 계산", nav_percent: "퍼센트 계산",
  nav_unitconvert: "단위 변환", nav_baseconvert: "진법 변환", nav_quadratic: "이차방정식",
  nav_bmi: "BMI 계산", nav_calorie: "소모 칼로리",

  home_title: "Reckon에 오신 것을 환영합니다",
  home_lead: "사용할 계산 도구를 선택하세요. 입력한 내용은 전송되지 않고 이 기기 안에서만 계산됩니다.",
  home_tag_date: "DATE", home_tag_math: "MATH", home_tag_health: "HEALTH",
  home_desc_age: "생년월일로 현재 나이와 다음 생일까지 남은 일수를 계산",
  home_desc_datediff: "두 날짜의 차이, 또는 N일 후/전의 날짜를 계산",
  home_desc_countdown: "방송 시작이나 이벤트까지 남은 시간을 표시",
  home_desc_weekday: "지정한 날짜의 요일을 확인",
  home_desc_timezone: "두 도시의 현재 시각과 시차를 비교",
  home_desc_zodiac: "태어난 해로 띠와 간지를 확인",
  home_desc_calc: "기본 계산과 공학용 계산기 모드",
  home_desc_splitbill: "단수 처리, 총무 적게 내기 옵션 지원",
  home_desc_percent: "할인 후 가격이나 증감률을 한 번에 계산",
  home_desc_unitconvert: "길이·무게·온도·면적·부피 변환",
  home_desc_baseconvert: "2진수·8진수·10진수·16진수·ASCII",
  home_desc_quadratic: "ax²+bx+c=0 의 해를 구함",
  home_desc_bmi: "키·체중으로 BMI와 적정 체중을 계산",
  home_desc_calorie: "운동 종류·시간으로 소모 칼로리를 계산",

  result_placeholder: "생년월일을 입력하세요",
  result_placeholder2: "날짜를 입력하세요",
  result_placeholder3: "도시를 선택하세요",

  age_birth_label: "생년월일", age_target_label: "기준일",
  age_future_error: "기준일은 생년월일보다 나중이어야 합니다",
  age_years_old: "세", age_detail_label: "상세",
  age_next_birthday: "다음 생일까지", age_today: "오늘",
  age_total_days: "산 날짜",
  unit_years: "년", unit_months: "개월", unit_days: "일", unit_weeks: "주", unit_people: "명", daysalive_weeks_label: "주 환산",

  datediff_mode_diff: "두 날짜의 차이", datediff_mode_add: "지정 일수 후/전",
  datediff_date1_label: "날짜1", datediff_date2_label: "날짜2",
  datediff_base_label: "기준일", datediff_days_label: "일수（음수면 이전）",
  datediff_direction_label: "관계", datediff_same_day: "같은 날",
  datediff_after: "날짜2가 날짜1보다 나중", datediff_before: "날짜2가 날짜1보다 이전",

  countdown_target_label: "목표 일시", countdown_title_label: "제목（선택）",
  countdown_placeholder: "목표 일시를 입력하세요", countdown_reached: "시간이 되었습니다!",
  unit_days_short: "일", unit_hours_short: "시간", unit_minutes_short: "분", unit_seconds_short: "초",

  weekday_date_label: "날짜", weekday_names: "일요일,월요일,화요일,수요일,목요일,금요일,토요일",

  timezone_a_label: "도시A", timezone_b_label: "도시B", timezone_diff_hours: "시간 차이",
  tz_tokyo: "도쿄", tz_seoul: "서울", tz_shanghai: "상하이", tz_taipei: "타이베이",
  tz_singapore: "싱가포르", tz_delhi: "델리", tz_london: "런던", tz_paris: "파리",
  tz_moscow: "모스크바", tz_newyork: "뉴욕", tz_losangeles: "로스앤젤레스", tz_chicago: "시카고",
  tz_saopaulo: "상파울루", tz_sydney: "시드니", tz_auckland: "오클랜드", tz_utc: "UTC",

  zodiac_year_label: "태어난 해", zodiac_placeholder: "연도를 입력하세요",
  zodiac_kanshi_label: "간지（육십갑자）",
  zodiac_rat: "쥐띠", zodiac_ox: "소띠", zodiac_tiger: "호랑이띠", zodiac_rabbit: "토끼띠",
  zodiac_dragon: "용띠", zodiac_snake: "뱀띠", zodiac_horse: "말띠", zodiac_goat: "양띠",
  zodiac_monkey: "원숭이띠", zodiac_rooster: "닭띠", zodiac_dog: "개띠", zodiac_pig: "돼지띠",
  kan_ko: "갑", kan_otsu: "을", kan_hei: "병", kan_tei: "정", kan_bo: "무",
  kan_ki: "기", kan_kou: "경", kan_shin: "신", kan_jin: "임", kan_ki2: "계",

  calc_mode_basic: "기본", calc_mode_sci: "공학용", calc_error: "오류",

  splitbill_total_label: "총 금액", splitbill_people_label: "인원수",
  splitbill_round_label: "단수 처리", splitbill_round_up: "올림", splitbill_round_down: "내림", splitbill_round_nearest: "반올림",
  splitbill_organizer_label: "총무는 적게 내기", splitbill_per_person: "1인당",
  splitbill_remainder_label: "단수（총무 부담）", splitbill_need_two: "2명 이상으로 계산하세요",
  splitbill_others_label: "다른 인원", splitbill_organizer_share_label: "총무 부담액",

  percent_mode_ratio: "A는 B의 몇%", percent_mode_value: "A의 몇%는 얼마",
  percent_mode_discount: "할인 후 가격", percent_mode_change: "증감률",
  percent_a_label: "A", percent_b_label: "B",
  percent_pct_label: "퍼센트 (%)", percent_base_label: "기준 값",
  percent_price_label: "원래 가격", percent_discount_label: "할인율 (%)",
  percent_before_label: "변경 전 값", percent_after_label: "변경 후 값",

  unit_cat_length: "길이", unit_cat_weight: "무게", unit_cat_temp: "온도", unit_cat_area: "면적", unit_cat_volume: "부피",
  unit_value_label: "수치", unit_from_label: "변환 전", unit_to_label: "변환 후",
  unit_mm: "밀리미터", unit_cm: "센티미터", unit_m: "미터", unit_km: "킬로미터",
  unit_inch: "인치", unit_ft: "피트", unit_yard: "야드", unit_mile: "마일",
  unit_mg: "밀리그램", unit_g: "그램", unit_kg: "킬로그램", unit_t: "톤", unit_oz: "온스", unit_lb: "파운드",
  unit_m2: "제곱미터", unit_km2: "제곱킬로미터", unit_cm2: "제곱센티미터", unit_ha: "헥타르", unit_tsubo: "평", unit_acre: "에이커",
  unit_ml: "밀리리터", unit_l: "리터", unit_m3: "세제곱미터", unit_gal: "갤런", unit_cup: "컵",
  unit_celsius: "섭씨 (℃)", unit_fahrenheit: "화씨 (℉)", unit_kelvin: "켈빈 (K)",

  base_value_label: "수치", base_from_label: "입력 진법", base_invalid: "잘못된 값입니다",

  quad_discriminant: "판별식", quad_not_quadratic: "a는 0이 아니어야 합니다",

  bmi_height_label: "키 (cm)", bmi_weight_label: "체중 (kg)",
  bmi_low: "저체중", bmi_normal: "정상 체중", bmi_high: "과체중", bmi_veryhigh: "비만",
  bmi_ideal_range: "적정 체중 범위",

  calorie_weight_label: "체중 (kg)", calorie_activity_label: "운동 종류", calorie_duration_label: "시간 (분)",
  activity_walking: "걷기", activity_jogging: "조깅", activity_running: "달리기",
  activity_cycling: "자전거", activity_swimming: "수영", activity_yoga: "요가",
  activity_strength: "근력 운동", activity_dancing: "댄스",
},

"zh-CN": {
  page_title: "Reckon — 各类计算",
  badge_local: "local-only",
  brand_name: "各类计算",
  app_tagline: "所有计算均在浏览器内完成。",
  back_to_top: "← 返回 Daigorou-Tools",
  footer_text: "所有计算均在本机完成，您输入的内容不会被发送到任何地方。",

  nav_home: "首页",
  nav_label_date: "日期·时间", nav_label_math: "计算·数学", nav_label_health: "健康",
  nav_age: "年龄计算", nav_datediff: "日期差计算",
  nav_countdown: "倒计时", nav_weekday: "星期计算", nav_timezone: "时差计算", nav_zodiac: "生肖·干支",
  nav_calc: "计算器", nav_splitbill: "AA制计算", nav_percent: "百分比计算",
  nav_unitconvert: "单位换算", nav_baseconvert: "进制转换", nav_quadratic: "一元二次方程",
  nav_bmi: "BMI计算", nav_calorie: "消耗卡路里",

  home_title: "欢迎使用 Reckon",
  home_lead: "请选择要使用的计算工具。您输入的内容不会被发送，仅在本机进行计算。",
  home_tag_date: "DATE", home_tag_math: "MATH", home_tag_health: "HEALTH",
  home_desc_age: "根据出生日期计算当前年龄和距下次生日的天数",
  home_desc_datediff: "计算两个日期之间的差，或N天后/前的日期",
  home_desc_countdown: "显示距离直播开始或活动的剩余时间",
  home_desc_weekday: "查询指定日期是星期几",
  home_desc_timezone: "比较两个城市的当前时间与时差",
  home_desc_zodiac: "根据出生年份查询生肖与干支",
  home_desc_calc: "基本计算与科学计算器模式",
  home_desc_splitbill: "支持取整方式和组织者少付选项",
  home_desc_percent: "一次算出折扣价、增减率等",
  home_desc_unitconvert: "长度、重量、温度、面积、体积换算",
  home_desc_baseconvert: "二进制、八进制、十进制、十六进制、ASCII",
  home_desc_quadratic: "求解 ax²+bx+c=0",
  home_desc_bmi: "根据身高体重算出BMI与适宜体重",
  home_desc_calorie: "根据运动种类和时长算出消耗卡路里",

  result_placeholder: "请输入出生日期",
  result_placeholder2: "请输入日期",
  result_placeholder3: "请选择城市",

  age_birth_label: "出生日期", age_target_label: "基准日期",
  age_future_error: "基准日期需晚于出生日期",
  age_years_old: "岁", age_detail_label: "详情",
  age_next_birthday: "距下次生日", age_today: "今天",
  age_total_days: "已活天数",
  unit_years: "年", unit_months: "个月", unit_days: "天", unit_weeks: "周", unit_people: "人", daysalive_weeks_label: "换算为周",

  datediff_mode_diff: "两个日期之差", datediff_mode_add: "指定天数后/前",
  datediff_date1_label: "日期1", datediff_date2_label: "日期2",
  datediff_base_label: "基准日期", datediff_days_label: "天数（负数为之前）",
  datediff_direction_label: "关系", datediff_same_day: "同一天",
  datediff_after: "日期2晚于日期1", datediff_before: "日期2早于日期1",

  countdown_target_label: "目标日期时间", countdown_title_label: "标题（可选）",
  countdown_placeholder: "请输入目标日期时间", countdown_reached: "时间到！",
  unit_days_short: "天", unit_hours_short: "时", unit_minutes_short: "分", unit_seconds_short: "秒",

  weekday_date_label: "日期", weekday_names: "星期日,星期一,星期二,星期三,星期四,星期五,星期六",

  timezone_a_label: "城市A", timezone_b_label: "城市B", timezone_diff_hours: "小时时差",
  tz_tokyo: "东京", tz_seoul: "首尔", tz_shanghai: "上海", tz_taipei: "台北",
  tz_singapore: "新加坡", tz_delhi: "德里", tz_london: "伦敦", tz_paris: "巴黎",
  tz_moscow: "莫斯科", tz_newyork: "纽约", tz_losangeles: "洛杉矶", tz_chicago: "芝加哥",
  tz_saopaulo: "圣保罗", tz_sydney: "悉尼", tz_auckland: "奥克兰", tz_utc: "UTC",

  zodiac_year_label: "出生年份", zodiac_placeholder: "请输入年份",
  zodiac_kanshi_label: "干支（六十甲子）",
  zodiac_rat: "鼠", zodiac_ox: "牛", zodiac_tiger: "虎", zodiac_rabbit: "兔",
  zodiac_dragon: "龙", zodiac_snake: "蛇", zodiac_horse: "马", zodiac_goat: "羊",
  zodiac_monkey: "猴", zodiac_rooster: "鸡", zodiac_dog: "狗", zodiac_pig: "猪",
  kan_ko: "甲", kan_otsu: "乙", kan_hei: "丙", kan_tei: "丁", kan_bo: "戊",
  kan_ki: "己", kan_kou: "庚", kan_shin: "辛", kan_jin: "壬", kan_ki2: "癸",

  calc_mode_basic: "标准", calc_mode_sci: "科学计算器", calc_error: "错误",

  splitbill_total_label: "总金额", splitbill_people_label: "人数",
  splitbill_round_label: "取整方式", splitbill_round_up: "向上取整", splitbill_round_down: "向下取整", splitbill_round_nearest: "四舍五入",
  splitbill_organizer_label: "组织者少付", splitbill_per_person: "每人",
  splitbill_remainder_label: "余数（组织者承担）", splitbill_need_two: "请以2人以上计算",
  splitbill_others_label: "其他成员", splitbill_organizer_share_label: "组织者承担金额",

  percent_mode_ratio: "A是B的百分之几", percent_mode_value: "A的百分之几是多少",
  percent_mode_discount: "折扣后价格", percent_mode_change: "增减率",
  percent_a_label: "A", percent_b_label: "B",
  percent_pct_label: "百分比 (%)", percent_base_label: "基准数值",
  percent_price_label: "原价", percent_discount_label: "折扣率 (%)",
  percent_before_label: "变化前的值", percent_after_label: "变化后的值",

  unit_cat_length: "长度", unit_cat_weight: "重量", unit_cat_temp: "温度", unit_cat_area: "面积", unit_cat_volume: "体积",
  unit_value_label: "数值", unit_from_label: "转换前", unit_to_label: "转换后",
  unit_mm: "毫米", unit_cm: "厘米", unit_m: "米", unit_km: "千米",
  unit_inch: "英寸", unit_ft: "英尺", unit_yard: "码", unit_mile: "英里",
  unit_mg: "毫克", unit_g: "克", unit_kg: "千克", unit_t: "吨", unit_oz: "盎司", unit_lb: "磅",
  unit_m2: "平方米", unit_km2: "平方千米", unit_cm2: "平方厘米", unit_ha: "公顷", unit_tsubo: "坪", unit_acre: "英亩",
  unit_ml: "毫升", unit_l: "升", unit_m3: "立方米", unit_gal: "加仑", unit_cup: "杯",
  unit_celsius: "摄氏度 (℃)", unit_fahrenheit: "华氏度 (℉)", unit_kelvin: "开尔文 (K)",

  base_value_label: "数值", base_from_label: "输入进制", base_invalid: "无效的数值",

  quad_discriminant: "判别式", quad_not_quadratic: "a 不能为 0",

  bmi_height_label: "身高 (cm)", bmi_weight_label: "体重 (kg)",
  bmi_low: "偏瘦", bmi_normal: "正常", bmi_high: "偏胖", bmi_veryhigh: "肥胖",
  bmi_ideal_range: "适宜体重范围",

  calorie_weight_label: "体重 (kg)", calorie_activity_label: "运动种类", calorie_duration_label: "时长 (分钟)",
  activity_walking: "步行", activity_jogging: "慢跑", activity_running: "跑步",
  activity_cycling: "骑行", activity_swimming: "游泳", activity_yoga: "瑜伽",
  activity_strength: "力量训练", activity_dancing: "跳舞",
},

"zh-TW": {
  page_title: "Reckon — 各類計算",
  badge_local: "local-only",
  brand_name: "各類計算",
  app_tagline: "所有計算皆在瀏覽器內完成。",
  back_to_top: "← 返回 Daigorou-Tools",
  footer_text: "所有計算皆在此裝置內完成，您輸入的內容不會被傳送到任何地方。",

  nav_home: "首頁",
  nav_label_date: "日期・時間", nav_label_math: "計算・數學", nav_label_health: "健康",
  nav_age: "年齡計算", nav_datediff: "日期差計算",
  nav_countdown: "倒數計時", nav_weekday: "星期計算", nav_timezone: "時差計算", nav_zodiac: "生肖・干支",
  nav_calc: "計算機", nav_splitbill: "分帳計算", nav_percent: "百分比計算",
  nav_unitconvert: "單位換算", nav_baseconvert: "進位轉換", nav_quadratic: "一元二次方程式",
  nav_bmi: "BMI計算", nav_calorie: "消耗卡路里",

  home_title: "歡迎使用 Reckon",
  home_lead: "請選擇要使用的計算工具。您輸入的內容不會被傳送，僅在此裝置內計算。",
  home_tag_date: "DATE", home_tag_math: "MATH", home_tag_health: "HEALTH",
  home_desc_age: "根據出生日期計算目前年齡與距下次生日的天數",
  home_desc_datediff: "計算兩個日期之間的差，或N天後/前的日期",
  home_desc_countdown: "顯示距離直播開始或活動的剩餘時間",
  home_desc_weekday: "查詢指定日期是星期幾",
  home_desc_timezone: "比較兩個城市的目前時間與時差",
  home_desc_zodiac: "根據出生年份查詢生肖與干支",
  home_desc_calc: "基本計算與科學計算機模式",
  home_desc_splitbill: "支援取整方式與主辦人少付選項",
  home_desc_percent: "一次算出折扣後價格、增減率等",
  home_desc_unitconvert: "長度、重量、溫度、面積、體積換算",
  home_desc_baseconvert: "二進位、八進位、十進位、十六進位、ASCII",
  home_desc_quadratic: "求解 ax²+bx+c=0",
  home_desc_bmi: "根據身高體重算出BMI與適宜體重",
  home_desc_calorie: "根據運動種類與時長算出消耗卡路里",

  result_placeholder: "請輸入出生日期",
  result_placeholder2: "請輸入日期",
  result_placeholder3: "請選擇城市",

  age_birth_label: "出生日期", age_target_label: "基準日期",
  age_future_error: "基準日期需晚於出生日期",
  age_years_old: "歲", age_detail_label: "詳情",
  age_next_birthday: "距下次生日", age_today: "今天",
  age_total_days: "已活天數",
  unit_years: "年", unit_months: "個月", unit_days: "天", unit_weeks: "週", unit_people: "人", daysalive_weeks_label: "換算為週",

  datediff_mode_diff: "兩個日期之差", datediff_mode_add: "指定天數後/前",
  datediff_date1_label: "日期1", datediff_date2_label: "日期2",
  datediff_base_label: "基準日期", datediff_days_label: "天數（負數為之前）",
  datediff_direction_label: "關係", datediff_same_day: "同一天",
  datediff_after: "日期2晚於日期1", datediff_before: "日期2早於日期1",

  countdown_target_label: "目標日期時間", countdown_title_label: "標題（可選）",
  countdown_placeholder: "請輸入目標日期時間", countdown_reached: "時間到！",
  unit_days_short: "天", unit_hours_short: "時", unit_minutes_short: "分", unit_seconds_short: "秒",

  weekday_date_label: "日期", weekday_names: "星期日,星期一,星期二,星期三,星期四,星期五,星期六",

  timezone_a_label: "城市A", timezone_b_label: "城市B", timezone_diff_hours: "小時時差",
  tz_tokyo: "東京", tz_seoul: "首爾", tz_shanghai: "上海", tz_taipei: "台北",
  tz_singapore: "新加坡", tz_delhi: "德里", tz_london: "倫敦", tz_paris: "巴黎",
  tz_moscow: "莫斯科", tz_newyork: "紐約", tz_losangeles: "洛杉磯", tz_chicago: "芝加哥",
  tz_saopaulo: "聖保羅", tz_sydney: "雪梨", tz_auckland: "奧克蘭", tz_utc: "UTC",

  zodiac_year_label: "出生年份", zodiac_placeholder: "請輸入年份",
  zodiac_kanshi_label: "干支（六十甲子）",
  zodiac_rat: "鼠", zodiac_ox: "牛", zodiac_tiger: "虎", zodiac_rabbit: "兔",
  zodiac_dragon: "龍", zodiac_snake: "蛇", zodiac_horse: "馬", zodiac_goat: "羊",
  zodiac_monkey: "猴", zodiac_rooster: "雞", zodiac_dog: "狗", zodiac_pig: "豬",
  kan_ko: "甲", kan_otsu: "乙", kan_hei: "丙", kan_tei: "丁", kan_bo: "戊",
  kan_ki: "己", kan_kou: "庚", kan_shin: "辛", kan_jin: "壬", kan_ki2: "癸",

  calc_mode_basic: "標準", calc_mode_sci: "科學計算機", calc_error: "錯誤",

  splitbill_total_label: "總金額", splitbill_people_label: "人數",
  splitbill_round_label: "取整方式", splitbill_round_up: "無條件進位", splitbill_round_down: "無條件捨去", splitbill_round_nearest: "四捨五入",
  splitbill_organizer_label: "主辦人少付", splitbill_per_person: "每人",
  splitbill_remainder_label: "餘數（主辦人負擔）", splitbill_need_two: "請以2人以上計算",
  splitbill_others_label: "其他成員", splitbill_organizer_share_label: "主辦人負擔金額",

  percent_mode_ratio: "A是B的百分之幾", percent_mode_value: "A的百分之幾是多少",
  percent_mode_discount: "折扣後價格", percent_mode_change: "增減率",
  percent_a_label: "A", percent_b_label: "B",
  percent_pct_label: "百分比 (%)", percent_base_label: "基準數值",
  percent_price_label: "原價", percent_discount_label: "折扣率 (%)",
  percent_before_label: "變化前的值", percent_after_label: "變化後的值",

  unit_cat_length: "長度", unit_cat_weight: "重量", unit_cat_temp: "溫度", unit_cat_area: "面積", unit_cat_volume: "體積",
  unit_value_label: "數值", unit_from_label: "轉換前", unit_to_label: "轉換後",
  unit_mm: "毫米", unit_cm: "公分", unit_m: "公尺", unit_km: "公里",
  unit_inch: "英吋", unit_ft: "英尺", unit_yard: "碼", unit_mile: "英里",
  unit_mg: "毫克", unit_g: "公克", unit_kg: "公斤", unit_t: "噸", unit_oz: "盎司", unit_lb: "磅",
  unit_m2: "平方公尺", unit_km2: "平方公里", unit_cm2: "平方公分", unit_ha: "公頃", unit_tsubo: "坪", unit_acre: "英畝",
  unit_ml: "毫升", unit_l: "公升", unit_m3: "立方公尺", unit_gal: "加侖", unit_cup: "杯",
  unit_celsius: "攝氏 (℃)", unit_fahrenheit: "華氏 (℉)", unit_kelvin: "克耳文 (K)",

  base_value_label: "數值", base_from_label: "輸入進位制", base_invalid: "無效的數值",

  quad_discriminant: "判別式", quad_not_quadratic: "a 不能為 0",

  bmi_height_label: "身高 (cm)", bmi_weight_label: "體重 (kg)",
  bmi_low: "過輕", bmi_normal: "正常", bmi_high: "過重", bmi_veryhigh: "肥胖",
  bmi_ideal_range: "適宜體重範圍",

  calorie_weight_label: "體重 (kg)", calorie_activity_label: "運動種類", calorie_duration_label: "時長 (分鐘)",
  activity_walking: "健走", activity_jogging: "慢跑", activity_running: "跑步",
  activity_cycling: "騎自行車", activity_swimming: "游泳", activity_yoga: "瑜伽",
  activity_strength: "肌力訓練", activity_dancing: "跳舞",
},

es: {
  page_title: "Reckon — Calculadoras",
  badge_local: "local-only",
  brand_name: "Calculadoras",
  app_tagline: "Todos los calculos se hacen en tu navegador.",
  back_to_top: "← Volver a Daigorou-Tools",
  footer_text: "Todo se procesa en este dispositivo. Nada de lo que escribas se envia a ningun lugar.",

  nav_home: "Inicio",
  nav_label_date: "Fecha y hora", nav_label_math: "Matematicas", nav_label_health: "Salud",
  nav_age: "Calculadora de edad", nav_datediff: "Diferencia de fechas",
  nav_countdown: "Cuenta atras", nav_weekday: "Dia de la semana", nav_timezone: "Zonas horarias", nav_zodiac: "Zodiaco chino",
  nav_calc: "Calculadora", nav_splitbill: "Dividir la cuenta", nav_percent: "Porcentaje",
  nav_unitconvert: "Conversor de unidades", nav_baseconvert: "Conversor de base", nav_quadratic: "Ecuacion cuadratica",
  nav_bmi: "Calculadora de IMC", nav_calorie: "Calorias quemadas",

  home_title: "Bienvenido a Reckon",
  home_lead: "Elige la calculadora que quieras usar. Nada de lo que escribas se envia a ningun lugar; todo se procesa en este dispositivo.",
  home_tag_date: "DATE", home_tag_math: "MATH", home_tag_health: "HEALTH",
  home_desc_age: "Calcula tu edad actual y los dias hasta tu proximo cumpleanos",
  home_desc_datediff: "Calcula la diferencia entre dos fechas, o una fecha a N dias de distancia",
  home_desc_countdown: "Muestra el tiempo restante hasta una transmision o evento",
  home_desc_weekday: "Averigua en que dia de la semana cae una fecha",
  home_desc_timezone: "Compara la hora actual y la diferencia entre dos ciudades",
  home_desc_zodiac: "Encuentra tu animal del zodiaco chino y el ciclo sexagesimal",
  home_desc_calc: "Calculadora basica con modo cientifico",
  home_desc_splitbill: "Con redondeo y opcion de que el organizador pague menos",
  home_desc_percent: "Precios con descuento, cambio porcentual y mas",
  home_desc_unitconvert: "Convierte longitud, peso, temperatura, area y volumen",
  home_desc_baseconvert: "Binario, octal, decimal, hexadecimal y ASCII",
  home_desc_quadratic: "Resuelve x en ax²+bx+c=0",
  home_desc_bmi: "Obten tu IMC y tu rango de peso saludable",
  home_desc_calorie: "Estima las calorias quemadas segun la actividad y duracion",

  result_placeholder: "Introduce una fecha de nacimiento",
  result_placeholder2: "Introduce una fecha",
  result_placeholder3: "Elige una ciudad",

  age_birth_label: "Fecha de nacimiento", age_target_label: "Fecha de referencia",
  age_future_error: "La fecha de referencia debe ser posterior a la de nacimiento",
  age_years_old: "anos", age_detail_label: "Detalle",
  age_next_birthday: "Hasta el proximo cumpleanos", age_today: "Hoy",
  age_total_days: "Dias vividos",
  unit_years: " a", unit_months: " m", unit_days: " dias", unit_weeks: " sem", unit_people: " personas", daysalive_weeks_label: "En semanas",

  datediff_mode_diff: "Diferencia entre dos fechas", datediff_mode_add: "N dias antes/despues",
  datediff_date1_label: "Fecha 1", datediff_date2_label: "Fecha 2",
  datediff_base_label: "Fecha base", datediff_days_label: "Dias (negativo = antes)",
  datediff_direction_label: "Relacion", datediff_same_day: "Mismo dia",
  datediff_after: "La fecha 2 es posterior a la fecha 1", datediff_before: "La fecha 2 es anterior a la fecha 1",

  countdown_target_label: "Fecha y hora objetivo", countdown_title_label: "Titulo (opcional)",
  countdown_placeholder: "Introduce la fecha y hora objetivo", countdown_reached: "¡Se acabo el tiempo!",
  unit_days_short: "dias", unit_hours_short: "h", unit_minutes_short: "min", unit_seconds_short: "s",

  weekday_date_label: "Fecha", weekday_names: "Domingo,Lunes,Martes,Miercoles,Jueves,Viernes,Sabado",

  timezone_a_label: "Ciudad A", timezone_b_label: "Ciudad B", timezone_diff_hours: "horas de diferencia",
  tz_tokyo: "Tokio", tz_seoul: "Seul", tz_shanghai: "Shanghai", tz_taipei: "Taipei",
  tz_singapore: "Singapur", tz_delhi: "Delhi", tz_london: "Londres", tz_paris: "Paris",
  tz_moscow: "Moscu", tz_newyork: "Nueva York", tz_losangeles: "Los Angeles", tz_chicago: "Chicago",
  tz_saopaulo: "Sao Paulo", tz_sydney: "Sidney", tz_auckland: "Auckland", tz_utc: "UTC",

  zodiac_year_label: "Ano de nacimiento", zodiac_placeholder: "Introduce un ano",
  zodiac_kanshi_label: "Ciclo sexagesimal",
  zodiac_rat: "Rata", zodiac_ox: "Buey", zodiac_tiger: "Tigre", zodiac_rabbit: "Conejo",
  zodiac_dragon: "Dragon", zodiac_snake: "Serpiente", zodiac_horse: "Caballo", zodiac_goat: "Cabra",
  zodiac_monkey: "Mono", zodiac_rooster: "Gallo", zodiac_dog: "Perro", zodiac_pig: "Cerdo",
  kan_ko: "Jia", kan_otsu: "Yi", kan_hei: "Bing", kan_tei: "Ding", kan_bo: "Wu",
  kan_ki: "Ji", kan_kou: "Geng", kan_shin: "Xin", kan_jin: "Ren", kan_ki2: "Gui",

  calc_mode_basic: "Estandar", calc_mode_sci: "Cientifica", calc_error: "Error",

  splitbill_total_label: "Importe total", splitbill_people_label: "Numero de personas",
  splitbill_round_label: "Redondeo", splitbill_round_up: "Redondear hacia arriba", splitbill_round_down: "Redondear hacia abajo", splitbill_round_nearest: "Redondeo normal",
  splitbill_organizer_label: "El organizador paga menos", splitbill_per_person: "por persona",
  splitbill_remainder_label: "Resto (lo cubre el organizador)", splitbill_need_two: "Se necesitan al menos 2 personas",
  splitbill_others_label: "Resto de miembros", splitbill_organizer_share_label: "Parte del organizador",

  percent_mode_ratio: "Que % es A de B", percent_mode_value: "Cuanto es el X% de A",
  percent_mode_discount: "Precio con descuento", percent_mode_change: "Cambio porcentual",
  percent_a_label: "A", percent_b_label: "B",
  percent_pct_label: "Porcentaje (%)", percent_base_label: "Valor base",
  percent_price_label: "Precio original", percent_discount_label: "Descuento (%)",
  percent_before_label: "Valor antes", percent_after_label: "Valor despues",

  unit_cat_length: "Longitud", unit_cat_weight: "Peso", unit_cat_temp: "Temperatura", unit_cat_area: "Area", unit_cat_volume: "Volumen",
  unit_value_label: "Valor", unit_from_label: "De", unit_to_label: "A",
  unit_mm: "Milimetro", unit_cm: "Centimetro", unit_m: "Metro", unit_km: "Kilometro",
  unit_inch: "Pulgada", unit_ft: "Pie", unit_yard: "Yarda", unit_mile: "Milla",
  unit_mg: "Miligramo", unit_g: "Gramo", unit_kg: "Kilogramo", unit_t: "Tonelada", unit_oz: "Onza", unit_lb: "Libra",
  unit_m2: "Metro cuadrado", unit_km2: "Kilometro cuadrado", unit_cm2: "Centimetro cuadrado", unit_ha: "Hectarea", unit_tsubo: "Tsubo", unit_acre: "Acre",
  unit_ml: "Mililitro", unit_l: "Litro", unit_m3: "Metro cubico", unit_gal: "Galon", unit_cup: "Taza",
  unit_celsius: "Celsius (°C)", unit_fahrenheit: "Fahrenheit (°F)", unit_kelvin: "Kelvin (K)",

  base_value_label: "Valor", base_from_label: "Base de entrada", base_invalid: "Numero no valido",

  quad_discriminant: "Discriminante", quad_not_quadratic: "a no puede ser 0",

  bmi_height_label: "Altura (cm)", bmi_weight_label: "Peso (kg)",
  bmi_low: "Bajo peso", bmi_normal: "Peso normal", bmi_high: "Sobrepeso", bmi_veryhigh: "Obesidad",
  bmi_ideal_range: "Rango de peso saludable",

  calorie_weight_label: "Peso (kg)", calorie_activity_label: "Actividad", calorie_duration_label: "Duracion (min)",
  activity_walking: "Caminar", activity_jogging: "Trote", activity_running: "Correr",
  activity_cycling: "Ciclismo", activity_swimming: "Natacion", activity_yoga: "Yoga",
  activity_strength: "Entrenamiento de fuerza", activity_dancing: "Baile",
},

};

const SUPPORTED_LANGS = ["ja","en","ko","zh-CN","zh-TW","es"];

function detectLang(){
  const saved = localStorage.getItem('reckon-lang');
  if(saved && SUPPORTED_LANGS.includes(saved)) return saved;
  const nav = (navigator.language || 'ja');
  const exact = SUPPORTED_LANGS.find(l => l.toLowerCase() === nav.toLowerCase());
  if(exact) return exact;
  const base = nav.split('-')[0].toLowerCase();
  if(base === 'zh'){
    return /tw|hk|mo/i.test(nav) ? 'zh-TW' : 'zh-CN';
  }
  const baseMatch = SUPPORTED_LANGS.find(l => l.split('-')[0].toLowerCase() === base);
  return baseMatch || 'ja';
}

let currentLang = detectLang();

function t(key){
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.ja[key] || key;
}

function applyI18n(lang){
  currentLang = SUPPORTED_LANGS.includes(lang) ? lang : 'ja';
  localStorage.setItem('reckon-lang', currentLang);
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if(el.tagName === 'TITLE'){ document.title = val; }
    else { el.textContent = val; }
  });
  const sel = document.getElementById('langSelect');
  if(sel) sel.value = currentLang;
  if(typeof window.reckonRecalcAll === 'function') window.reckonRecalcAll();
}

document.addEventListener('DOMContentLoaded', () => {
  applyI18n(currentLang);
  const sel = document.getElementById('langSelect');
  if(sel){
    sel.addEventListener('change', () => applyI18n(sel.value));
  }
});
