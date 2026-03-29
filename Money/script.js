// ==========================================
// 1. LANGUAGE & DICTIONARY SYSTEM
// ==========================================
let currentLang = 'th';

const UI_TEXT = {
    mainTitle: { th: "Money Sim Game", en: "Teen Money Sim" },
    selectAvatar: { th: "เลือกตัวละครของคุณ", en: "Choose Your Character" },
    timeWarning: { th: "คุณมีเวลาตัดสินใจ 10 วินาทีต่อเหตุการณ์", en: "You have 10 seconds to make a decision in each event" },
    boy: { th: "เด็กหนุ่ม", en: "Boy" },
    girl: { th: "เด็กสาว", en: "Girl" },
    
    // 🌟 กติกา 🌟
    rulesTitle: { th: "กติกาการเล่น", en: "Game Rules" },
    rulesBody: { 
        th: `1. แต่ละคำถาม ผู้เล่นมีเวลาตอบแค่เพียง 10 วินาที<br>2. มีงบให้ 4,500 บาท ต่อเดือน ในการเล่น 1 ครั้ง<br>3. คำถามเป็นคำถามจำลองกิจวัตรประจำวัน การตอบ 1 ครั้ง จะถูกคูณ 30 เพื่อเหมือนการใช้จ่ายทุกวัน<br>4. จะมีคำถามที่เป็นเหตุการณ์ฉุกเฉินสุ่ม 1 สถานการณ์ อันนี้ไม่ได้ถูกคูณ<br>5. กรุณาเลือกคำตอบตามการใช้เงินปกติ เพื่อให้ระบบสามารถคำนวณผล และให้คำแนะนำถูกต้อง<br>6. จะมีให้เลือกแผนการใช้เงิน โดยการคำนวณเงิน ถ้าเงินไม่พอ เงินฉุกเฉินจะถูกดึงมาเป็นส่วนแรก ส่วนเงินออมจะถูกดึงมาส่วนสุดท้าย`, 
        en: `1. Each question must be answered within 10 seconds.<br>2. You have a monthly budget of 4,500 THB for each playthrough.<br>3. The questions simulate daily life situations. Each choice you make will be multiplied by 30 to represent daily spending over a month.<br>4. One random emergency event will occur during the game. This event will NOT be multiplied.<br>5. Please choose answers based on your real spending behavior so the system can accurately analyze your results and provide appropriate recommendations.<br>6. You will choose a budgeting plan. If your spending exceeds your available money, funds will be automatically withdrawn—first from your emergency fund, and lastly from your savings.` 
    },
    btnUnderstand: { th: "เข้าใจแล้ว ไปเลือกแผน", en: "Understood, Choose Plan" },

    planTitle: { th: "เลือกแผนจัดการเงิน (มีงบ 4,500 ฿)", en: "Choose Your Budget Plan (Total: 4,500 THB)" },
    planSubtitle: { th: "เลือกสไตล์การเก็บเงินของคุณ", en: "Select your money management style" },
    planA: { th: "แผน A: สายวางแผน", en: "Plan A" },
    planADesc: { th: "ใช้ 50% | ออม 30% | ฉุกเฉิน 20%", en: "Spend 50% | Save 30% | Emergency 20%" },
    planB: { th: "แผน B: สายกลางๆ", en: "Plan B" },
    planBDesc: { th: "ใช้ 70% | ออม 20% | ฉุกเฉิน 10%", en: "Spend 70% | Save 20% | Emergency 10%" },
    planC: { th: "แผน C: สายใช้เงิน", en: "Plan C" },
    planCDesc: { th: "ใช้ 90% | ออม 10% | ฉุกเฉิน 0%", en: "Spend 90% | Save 10% | Emergency 0%" },
    
    bag: { th: "ในกระเป๋า", en: "Available Money" },
    emergency: { th: "เงินฉุกเฉิน", en: "Emergency Fund" },
    saving: { th: "กระปุกออม", en: "Savings" },
    timeLeft: { th: "เวลาเลือก:", en: "Time Left:" },
    loading: { th: "กำลังโหลดเควส...", en: "Loading quest..." },
    resultHeader: { th: "ผลสรุปการเงินของคุณ", en: "Your Financial Summary" },
    finalMoneyTitle: { th: "เงินสดสุดท้าย", en: "Final Balance" },
    finalStressTitle: { th: "ความเครียดสะสม", en: "Total Stress" },
    finalHappyTitle: { th: "คะแนนความสุข", en: "Happiness Score" },
    finalDisciplineTitle: { th: "วินัยทางการเงิน", en: "Financial Discipline" },
    finalSpendingTitle: { th: "พฤติกรรมสายเปย์", en: "Spending Behavior" },
    finalSavingTitle: { th: "พลังการเก็บออม", en: "Saving Power" },
    btnInsight: { th: "อ่านคลังความรู้", en: "View Financial Insights" },
    btnRestart1: { th: "เริ่มชีวิตใหม่", en: "Start a New Life" },
    btnRestart2: { th: "เริ่มชีวิตใหม่", en: "Start a New Life" },
    adviceHeader: { th: "คำแนะนำการเรียนรู้ด้านการเงิน", en: "Financial Learning Insights" },
    adviceDesc: { th: "วิเคราะห์จากทุกการตัดสินใจใน \"การใช้เงิน\" ของคุณ", en: "Based on your spending decisions throughout the game" },
    analyzing: { th: "กำลังรวบรวมข้อมูล...", en: "Analyzing your data..." },
    recTopics: { th: "หัวข้อที่แนะนำให้ศึกษาเพิ่มเติม", en: "Recommended Topics to Explore" },
    btnSave: { th: "บันทึกความรู้", en: "Save This Insight" },
    dailyPrefix: { th: "<b>[ภารกิจประจำวัน]</b><br>", en: "<b>[Daily Quest]</b><br>" },
    specialPrefix: { th: "<b style='color:#E06C6C;'>[เหตุการณ์ฉุกเฉิน]</b><br>", en: "<b style='color:#E06C6C;'>[Emergency Mission]</b><br>" }
};

const ANALYSIS_TEXT = {
    behaviorHeader: { th: "ผลการวิเคราะห์พฤติกรรมของคุณ", en: "Your Behavior Analysis" }
};

// ==========================================
// 2. DATA (BILINGUAL)
// ==========================================
const DAILY_EVENTS = [
  {
    text: { th: "ตื่นสาย แต่คลาสแรกเริ่มในอีก 30 นาที", en: "You woke up late. Your first class starts in 30 minutes." },
    choices: [
      { text: { th: "เรียกรถผ่านแอป", en: "Call a ride via app" }, cost: -80, money: -2, stress: 1, discipline: -1, saving: -1, spending: 1, happiness: 1 },
      { text: { th: "นั่งรถโดยสารประจำทาง", en: "Take the bus" }, cost: -20, money: -1, stress: -1, discipline: 1, saving: 1, spending: -1, happiness: -1 },
      { text: { th: "ข้ามคาบแรกไปเลย", en: "Skip the first class" }, cost: 0, money: 1, stress: 1, discipline: -2, saving: -1, spending: 1, happiness: -1 }
    ]
  },
  {
    text: { th: "แวะเติมพลังตอนเช้าก่อนเข้าเรียน", en: "You stop for a quick energy boost before class." },
    choices: [
      { text: { th: "ซื้อกาแฟแก้วโปรด", en: "Buy your favorite coffee" }, cost: -60, money: -1, stress: 1, discipline: 1, saving: -1, spending: -1, happiness: 1 },
      { text: { th: "ซื้อขนมรองท้อง", en: "Grab a quick snack" }, cost: -30, money: -1, stress: -1, discipline: -1, saving: -1, spending: 1, happiness: 1 },
      { text: { th: "ไม่ซื้อ ทนหิวเอา", en: "Skip it and stay hungry" }, cost: 0, money: 1, stress: -1, discipline: 2, saving: 1, spending: -2, happiness: -2 }
    ]
  },
  {
    text: { th: "มื้อกลางวัน กินอะไรดี", en: "It’s lunchtime. What will you eat?" },
    choices: [
      { text: { th: "กินข้าวกับเพื่อน (จัดเต็ม)", en: "Eat with friends (full meal)" }, cost: -100, money: -2, stress: -2, discipline: -1, saving: -1, spending: 2, happiness: 2 },
      { text: { th: "กินข้าวราดแกงง่ายๆ", en: "Have a simple meal" }, cost: -40, money: -1, stress: 0, discipline: 1, saving: 1, spending: -1, happiness: 0 },
      { text: { th: "กินบะหมี่กึ่งสำเร็จรูป", en: "Go super budget" }, cost: -15, money: 1, stress: 1, discipline: 2, saving: 2, spending: -2, happiness: -1 }
    ]
  },
  {
    text: { th: "เลิกเรียนแล้ว เพื่อนชวนกินน้ำหวาน", en: "After school, your friend invites you for a sweet drink." },
    choices: [
      { text: { th: "ซื้อกินด้วยกัน", en: "Buy and enjoy together" }, cost: -50, money: -1, stress: -1, discipline: -1, saving: -1, spending: 1, happiness: 1 },
      { text: { th: "ปฏิเสธ ไม่กิน", en: "Say no" }, cost: 0, money: 1, stress: 1, discipline: 2, saving: 1, spending: -2, happiness: -1 },
      { text: { th: "หารกันกินแก้วเดียว", en: "Share one drink" }, cost: -25, money: 0, stress: 0, discipline: 1, saving: 1, spending: -1, happiness: 1 }
    ]
  },
  {
    text: { th: "เดินผ่านร้าน เจอของที่เล็งไว้มานาน", en: "You pass by a shop and see something you've wanted for a long time." },
    choices: [
      { text: { th: "ซื้อเลย ของมันต้องมี!", en: "Buy it immediately — you deserve it!" }, cost: -300, money: -3, stress: -2, discipline: -2, saving: -2, spending: 3, happiness: 3 },
      { text: { th: "อดใจไว้ ไม่ซื้อ", en: "Resist and don’t buy" }, cost: 0, money: 2, stress: 2, discipline: 3, saving: 2, spending: -3, happiness: -2 },
      { text: { th: "ถ่ายรูปไว้กลับไปคิดดูก่อน", en: "Take a photo and think about it later" }, cost: 0, money: 1, stress: 0, discipline: 2, saving: 1, spending: -1, happiness: 0 }
    ]
  },
  {
    text: { th: "มื้อเย็นวันนี้ กินอะไรดี?", en: "What’s for dinner tonight?" },
    choices: [
      { text: { th: "สั่งเดลิเวอรี่ กินสบายๆ", en: "Order delivery and relax" }, cost: -150, money: -2, stress: -2, discipline: -1, saving: -1, spending: 2, happiness: 2 },
      { text: { th: "กินข้าวบ้าน / ทำเอง", en: "Eat at home / cook yourself" }, cost: -30, money: 2, stress: 0, discipline: 2, saving: 2, spending: -2, happiness: 1 },
      { text: { th: "ออกไปกินร้านอร่อยๆ", en: "Go out for a nice meal" }, cost: -250, money: -3, stress: -3, discipline: -2, saving: -2, spending: 3, happiness: 3 }
    ]
  }
];

const SPECIAL_EVENTS = [
  {
    text: { th: "ซวยแล้ว! โทรศัพท์ร่วงพื้น หน้าจอแตก", en: "Oh no! You dropped your phone and the screen is broken." },
    choices: [
      { text: { th: "ซ่อมร้านตู้ประหยัดกว่า", en: "Repair it at a local shop" }, cost: -500, money: -2, stress: 1, discipline: 1, saving: 0, spending: 1 },
      { text: { th: "ซื้อใหม่รุ่นท็อปไปเลย!", en: "Buy a brand-new top model" }, cost: -3500, money: -3, stress: -2, discipline: -3, saving: -3, spending: 3 },
      { text: { th: "ยืมเครื่องเก่าเพื่อนใช้ชั่วคราว", en: "Borrow a friend’s old phone" }, cost: 0, money: 2, stress: 2, discipline: 2, saving: 2, spending: -2 }
    ]
  },
  {
    text: { th: "เพื่อนสนิทชวนไปเที่ยวต่างจังหวัด", en: "Your close friend invites you on a trip." },
    choices: [
      { text: { th: "ไปสิ! ร่างกายต้องการปะทะ", en: "Go! You need a break" }, cost: -1500, money: -3, stress: -3, discipline: -2, saving: -2, spending: 2 },
      { text: { th: "ปฏิเสธ เก็บเงินไว้ก่อน", en: "Decline and save money" }, cost: 0, money: 2, stress: 2, discipline: 3, saving: 3, spending: -2 },
      { text: { th: "ไปแบบประหยัด หารกันทุกเม็ด", en: "Go on a budget and split costs" }, cost: -700, money: -1, stress: 0, discipline: 1, saving: 1, spending: -1 }
    ]
  },
  {
    text: { th: "แจ้งเตือนลดราคากระหน่ำ! ลดสูงสุด 80%", en: "Flash Sale Alert! Up to 80% off!" },
    choices: [
      { text: { th: "กดสั่งรัวๆ โอกาสทอง!", en: "Buy everything — great deal!" }, cost: -800, money: -2, stress: -1, discipline: -3, saving: -2, spending: 3 },
      { text: { th: "เมินเฉย ปิดแอปทิ้ง", en: "Ignore it completely" }, cost: 0, money: 2, stress: 0, discipline: 3, saving: 2, spending: -2 },
      { text: { th: "หยิบใส่ตะกร้าไว้ก่อน ค่อยคิด", en: "Add to cart and think first" }, cost: 0, money: 1, stress: 1, discipline: 2, saving: 1, spending: -1 }
    ]
  },
  {
    text: { th: "ตื่นมาปวดท้องหนักมาก ป่วยกะทันหัน!", en: "You wake up with severe stomach pain. You're suddenly sick." },
    choices: [
      { text: { th: "ไป รพ. เอกชน (เร็วและชัวร์)", en: "Go to a private hospital (fast & safe)" }, cost: -1200, money: -2, stress: -2, discipline: 0, saving: -1, spending: 1 },
      { text: { th: "ซื้อยากินเอง", en: "Buy medicine from a pharmacy" }, cost: -150, money: 1, stress: 1, discipline: 1, saving: 1, spending: -1 },
      { text: { th: "ทนเอา เผื่อหายเอง", en: "Wait it out and hope it gets better" }, cost: 0, money: 2, stress: 3, discipline: -1, saving: 2, spending: -2 }
    ]
  }
];

const ADVICE_DATA = {
    mindset: {
        title: { th: "1. วิธีคิดเรื่องเงิน", en: "1. Money Mindset" },
        content: {
            th: `<b>แนวคิดหลัก:</b> วิธีคิดของคุณเป็นตัวกำหนดวิธีใช้เงิน<br><br><b>กรอบความคิดแบบเดิม</b><br>- "เงินมีไว้ใช้"<br>- "อยากได้ก็ต้องซื้อ"<br>- "เดี๋ยวค่อยคิดทีหลัง"<br><br><b>กรอบความคิดแบบใหม่</b><br>- เงินทุกบาทมีหน้าที่ของมัน<br>- การจ่ายเงินคือการเลือกอนาคตให้ตัวเอง<br>- คิดให้ถี่ถ้วนก่อนใช้เสมอ<br><br><b>กฎง่ายๆ:</b><br>ก่อนซื้ออะไร ลองถามตัวเองดูว่า:<br>1. สิ่งนี้จำเป็นจริงๆ ไหม?<br>2. ซื้อแล้วคุ้มค่าไหม?<br>3. ถ้าไม่ซื้อตอนนี้ จะเกิดผลเสียอะไรไหม?<br>ถ้าคำตอบส่วนใหญ่คือ "ไม่" = อย่าเพิ่งซื้อ`,
            en: `<b>Core Idea:</b> Your mindset shapes how you use money.<br><br><b>Old Mindset</b><br>- “Money is meant to be spent”<br>- “If I want it, I’ll buy it”<br>- “I’ll think about it later”<br><br><b>New Mindset</b><br>- Every baht has a purpose<br>- Spending money means choosing your future<br>- Always think before you spend<br><br><b>Simple Rule:</b><br>Before buying anything, ask yourself:<br>1. Do I really need this?<br>2. Is it worth it?<br>3. What happens if I don’t buy it?<br>If most answers are “no”, don’t buy it.`
        }
    },
    spending: {
        title: { th: "2. การใช้จ่ายอย่างชาญฉลาด", en: "2. Smart Spending" },
        content: {
            th: `<b>แนวคิดหลัก:</b> ใช้เงินอย่างมีสติ ไม่ใช้จ่ายตามอารมณ์<br><br><b>แยกให้ออกระหว่าง "จำเป็น" กับ "อยากได้"</b><br>- สิ่งจำเป็น = ขาดไปแล้วกระทบกับการใช้ชีวิต<br>- สิ่งที่อยากได้ = ไม่มีก็อยู่ได้ แค่สนองความต้องการ<br>→ ต้องแยกสองสิ่งนี้ให้ออกก่อนจ่ายเงินเสมอ<br><br><b>กฎ 24 ชั่วโมง</b><br>ถ้าอยากได้ของชิ้นไหน อย่าเพิ่งซื้อทันที ให้รอครบ 24 ชม. ก่อนตัดสินใจ<br>→ ช่วยลดอาการวู่วามจากการใช้เงินตามอารมณ์ได้ดีมาก<br><br><b>รู้เท่าทันตัวเอง</b><br>รู้ตัวเสมอว่าจ่ายเงินไปเพื่ออะไร อย่าจ่ายไปก่อนแล้วค่อยมาเสียดายทีหลัง`,
            en: `<b>Core Idea:</b> Spend with awareness, not emotion.<br><br><b>Understand Needs vs Wants</b><br>- Needs = things necessary for living<br>- Wants = things you desire but can live without<br>→ Always separate them before spending<br><br><b>24-Hour Rule</b><br>If you want something, don’t buy it immediately. Wait 24 hours before deciding.<br>→ This helps reduce emotional spending<br><br><b>Mindful Spending</b><br>Know why you are spending. Don’t spend first and think later.`
        }
    },
    budgeting: {
        title: { th: "3. การวางแผนการเงิน", en: "3. Budgeting" },
        content: {
            th: `<b>แนวคิดหลัก:</b> วางแผนก่อนใช้ เพื่อควบคุมเงินให้อยู่มือ<br><br><b>ติดตามเงินของคุณ</b><br>ต้องรู้ว่าเงินเข้ามาจากไหน และไหลออกไปทางไหนบ้าง<br>→ นี่คือพื้นฐานสำคัญที่สุดของการควบคุมเงิน<br><br><b>แบ่งสัดส่วนเงินให้ชัดเจน</b><br>แยกกระเป๋าเงินตามจุดประสงค์:<br>- เงินสำหรับใช้จ่าย (ของจำเป็น)<br>- เงินสำหรับให้รางวัลตัวเอง (ของที่อยากได้)<br>- เงินเก็บออม<br><br><b>ตั้งขีดจำกัด</b><br>กำหนดงบประมาณการใช้ และหยุดเมื่อถึงเป้าหมาย<br>→ ป้องกันปัญหาเงินช็อตปลายเดือน<br><br><b>มองเผื่ออนาคต</b><br>เตรียมตัวสำหรับค่าใช้จ่ายที่รู้ว่าจะมาถึงแน่นอนล่วงหน้า`,
            en: `<b>Core Idea:</b> Plan before you spend to control your money.<br><br><b>Track Your Money</b><br>Know where your money comes from and where it goes.<br>→ This is the foundation of financial control<br><br><b>Divide Your Money</b><br>Clear separation:<br>- Spending (needs)<br>- Spending (wants)<br>- Saving<br><br><b>Set Limits</b><br>Create a spending limit and stop when you reach it.<br>→ Prevent running out of money<br><br><b>Plan Ahead</b><br>Prepare for known expenses.`
        }
    },
    earning: {
        title: { th: "4. การหารายได้", en: "4. Earning Money" },
        content: {
            th: `<b>แนวคิดหลัก:</b> รายได้มาจากคุณค่าที่คุณสร้างขึ้น<br><br><b>เริ่มตั้งแต่วันนี้</b><br>ไม่ต้องรอให้ทุกอย่างสมบูรณ์แบบ เริ่มต้นจากสิ่งที่คุณมีอยู่ตอนนี้<br><br><b>สร้างคุณค่า</b><br>รายได้ = คุณค่าที่คุณมอบให้ผู้อื่น<br>→ ยิ่งแก้ปัญหาให้คนอื่นได้มาก ยิ่งได้รับผลตอบแทนเยอะ<br><br><b>ใช้ทักษะให้เป็นประโยชน์</b><br>ความสามารถของคุณเปลี่ยนเป็นเงินได้<br>→ พัฒนาทักษะตัวเองสม่ำเสมอเพื่อเพิ่มโอกาส<br><br><b>ใช้เวลาอย่างคุ้มค่า</b><br>เวลาคือทรัพยากรที่มีค่าที่สุด<br>→ เปลี่ยนเวลาว่างให้กลายเป็นรายได้`,
            en: `<b>Core Idea:</b> Income comes from the value you create.<br><br><b>Start Now</b><br>You don’t need to be perfect to start. Start with what you already have.<br><br><b>Create Value</b><br>Income = the value you provide.<br>→ The more useful you are, the more you can earn<br><br><b>Use Your Skills</b><br>Your skills can generate income.<br>→ Improve your skills to increase opportunities<br><br><b>Use Time Wisely</b><br>Time is a valuable resource.<br>→ Turn your time into money.`
        }
    },
    saving: {
        title: { th: "5. การเก็บออม", en: "5. Saving Money" },
        content: {
            th: `<b>แนวคิดหลัก:</b> ออมก่อน ค่อยนำไปใช้<br><br><b>จ่ายให้ตัวเองเป็นคนแรก</b><br>เมื่อได้เงินมา ให้หักเข้าบัญชีเงินออมทันที!<br>→ อย่ารอให้เหลือใช้แล้วค่อยออม เพราะมันจะไม่มีวันเหลือ<br><br><b>ตั้งเป้าหมาย</b><br>รู้ว่าตัวเองเก็บเงินไปเพื่ออะไร<br>→ เป้าหมายที่ชัดเจนจะทำให้เรามีกำลังใจ<br><br><b>เน้นความสม่ำเสมอ</b><br>เก็บทีละนิด แต่เก็บเป็นประจำ<br>→ วินัยและความสม่ำเสมอสำคัญกว่าจำนวนเงิน<br><br><b>แยกบัญชีให้ชัดเจน</b><br>แยกบัญชีเงินออมออกจากบัญชีใช้จ่ายทั่วไป เพื่อลดโอกาสในการเผลอหยิบมาใช้`,
            en: `<b>Core Idea:</b> Save first, then spend.<br><br><b>Pay Yourself First</b><br>Save immediately when you receive money.<br>→ Don’t wait for leftovers<br><br><b>Set a Goal</b><br>Know why you are saving.<br>→ Goals keep you motivated<br><br><b>Be Consistent</b><br>Save a small amount regularly.<br>→ Consistency is more important than amount<br><br><b>Separate Your Savings</b><br>Keep savings separate from spending money to reduce the chance of using it.`
        }
    },
    investing: {
        title: { th: "6. การลงทุน", en: "6. Investing" },
        content: {
            th: `<b>แนวคิดหลัก:</b> ให้เงินทำงานแทนเรา<br><br><b>ทำความเข้าใจการลงทุน</b><br>การลงทุนคือเครื่องมือที่ช่วยให้เงินของคุณเติบโตขึ้นตามกาลเวลา<br><br><b>ความเสี่ยงและผลตอบแทน</b><br>ผลตอบแทนสูง ย่อมตามมาด้วยความเสี่ยงที่สูง<br>→ เลือกรูปแบบการลงทุนที่เหมาะสมกับระดับความเสี่ยงที่คุณรับได้<br><br><b>ลงทุนในสิ่งที่เข้าใจ</b><br>อย่าลงทุนตามคนอื่นในสิ่งที่คุณไม่มีความรู้เด็ดขาด<br>→ ความรู้คือเกราะป้องกันความเสี่ยงที่ดีที่สุด<br><br><b>มองผลระยะยาว</b><br>อย่าคาดหวังแค่ผลกำไรระยะสั้น<br>→ เวลาและดอกเบี้ยทบต้นจะช่วยให้เงินเติบโตอย่างมั่นคง`,
            en: `<b>Core Idea:</b> Make your money work for you.<br><br><b>Understand Investing</b><br>Investing helps your money grow over time.<br><br><b>Risk vs Return</b><br>Higher return = higher risk.<br>→ Choose what fits you<br><br><b>Invest in What You Understand</b><br>Never invest blindly.<br>→ Knowledge reduces risk<br><br><b>Think Long-Term</b><br>Don’t focus on quick profits.<br>→ Time helps your money grow.`
        }
    },
    protection: {
        title: { th: "7. การป้องกันความเสี่ยง", en: "7. Financial Protection" },
        content: {
            th: `<b>แนวคิดหลัก:</b> การรักษาเงินไว้ สำคัญพอๆ กับการหาเงินมา<br><br><b>ตระหนักถึงความเสี่ยง</b><br>เหตุการณ์ไม่คาดฝันทางการเงินเกิดขึ้นได้เสมอ<br>→ ต้องเตรียมพร้อมรับมืออยู่ตลอดเวลา<br><br><b>หลีกเลี่ยงการตัดสินใจที่ผิดพลาด</b><br>- อย่าใช้เงินก้อนใหญ่ตามอารมณ์ชั่ววูบ<br>- อย่าหลงเชื่อการลงทุนที่ดูดีเกินจริงหรือได้เงินเร็วเกินไป<br><br><b>เตรียมพร้อมสำหรับเรื่องฉุกเฉิน</b><br>ต้องมีเงินสำรองฉุกเฉินติดตัวไว้เสมอ<br>→ เพื่อเป็นเบาะรองรับเมื่อเกิดเหตุการณ์ที่ต้องใช้เงินด่วน`,
            en: `<b>Core Idea:</b> Protecting money is as important as earning it.<br><br><b>Be Aware of Risks</b><br>Financial risks can happen anytime.<br>→ Always stay prepared<br><br><b>Avoid Bad Decisions</b><br>- Don’t spend emotionally<br>- Don’t trust things that sound too good to be true<br><br><b>Prepare for Emergencies</b><br>Have backup money.<br>→ Be ready for unexpected situations.`
        }
    },
    goals: {
        title: { th: "8. เป้าหมายทางการเงิน", en: "8. Financial Goals" },
        content: {
            th: `<b>แนวคิดหลัก:</b> เงินต้องมีทิศทาง เพื่อพุ่งชนเป้าหมาย<br><br><b>กำหนดเป้าหมายให้ชัดเจน</b><br>ต้องตอบให้ได้ว่าคุณต้องการอะไร และต้องการเมื่อไหร่<br><br><b>สร้างแผนการ</b><br>ซอยเป้าหมายใหญ่ๆ ให้กลายเป็นขั้นตอนเล็กๆ ที่ทำได้จริง<br><br><b>ติดตามและปรับปรุง</b><br>หมั่นเช็กความคืบหน้าของตัวเองสม่ำเสมอ<br>→ หากรู้สึกว่าผิดแผน ให้รีบปรับปรุงแก้ไขทันที<br><br><b>ใช้จ่ายอย่างมีจุดหมาย</b><br>ตัดรายจ่ายที่ไม่ตอบโจทย์ชีวิตทิ้งไป<br>→ นำเงินไปโฟกัสกับสิ่งที่สำคัญกับเป้าหมายของคุณจริงๆ`,
            en: `<b>Core Idea:</b> Money needs direction to reach goals.<br><br><b>Set Clear Goals</b><br>Know what you want and make it specific.<br><br><b>Make a Plan</b><br>Break big goals into smaller steps.<br><br><b>Track and Adjust</b><br>Check your progress regularly.<br>→ Improve your plan if needed<br><br><b>Spend with Purpose</b><br>Cut unnecessary expenses.<br>→ Focus on what truly matters.`
        }
    }
};

// ==========================================
// 3. GAME VARIABLES
// ==========================================
let moneySpend = 0;
let moneyEmergency = 0;
let moneySaving = 0;

let currentEventIndex = 0;
let eventQueue = [];
let isSpecialEvent = false;

let scoreMoney = 0; 
let scoreStress = 0; 
let scoreDiscipline = 0; 
let scoreSaving = 0; 
let scoreSpending = 0;
let scoreHappiness = 0; 

let timerInterval;
let timeLeft = 10;
let avatarType = 'male';
let currentAdviceId = null;

// 🌟 ตัวแปรใหม่: เก็บแผนที่ผู้เล่นเลือก เพื่อเอาไปคำนวณปัญหาตอนจบ
let selectedPlan = 'A'; 

// ==========================================
// 4. SYSTEM & CONTROL FUNCTIONS
// ==========================================
function toggleLanguage() {
    currentLang = currentLang === 'th' ? 'en' : 'th';
    document.getElementById('langBtn').innerText = currentLang.toUpperCase();
    updateUI(); 
}

function updateUI() {
    const uids = Object.keys(UI_TEXT);
    uids.forEach(id => {
        const el = document.getElementById('ui-' + id.replace(/([A-Z])/g, "-$1").toLowerCase());
        if(el) el.innerHTML = UI_TEXT[id][currentLang];
    });

    if(document.getElementById('phase-game').style.display !== 'none' && eventQueue.length > 0) {
        let prefix = isSpecialEvent ? UI_TEXT.specialPrefix[currentLang] : UI_TEXT.dailyPrefix[currentLang];
        document.getElementById('event-text').innerHTML = prefix + eventQueue[currentEventIndex].text[currentLang];
        
        const buttons = document.querySelectorAll('.slot-inner.choice-text');
        const choices = eventQueue[currentEventIndex].choices;
        buttons.forEach((btn, idx) => {
            btn.innerHTML = choices[idx].text[currentLang];
        });
    }

    if(document.getElementById('phase-result').style.display !== 'none') {
        document.getElementById('result-title').innerText = getTitle()[currentLang];
    }

    if(document.getElementById('phase-advice').style.display !== 'none' || document.getElementById('phase-advice-detail').style.display !== 'none') {
        let analysisResult = generateAdvice();
        document.getElementById('advice-text').innerHTML = `
            <div style="margin-bottom: 10px; font-weight: 800; color: #E88F6F;">${ANALYSIS_TEXT.behaviorHeader[currentLang]}:</div>
            ${analysisResult.text}
        `;
        renderRecommendations(analysisResult.topics);
    }

    if(document.getElementById('phase-advice-detail').style.display !== 'none' && currentAdviceId !== null) {
        const data = ADVICE_DATA[currentAdviceId];
        document.getElementById('advice-detail-title').textContent = data.title[currentLang];
        document.getElementById('advice-detail-body').innerHTML = data.content[currentLang];
    }
}

// ==========================================
// 5. NAVIGATION LOGIC (เลือกตัวละคร -> กติกา -> เลือกแผน)
// ==========================================
function selectCharacter(type) {
    avatarType = type;
    document.getElementById('phase-start').style.display = 'none';
    document.getElementById('phase-rules').style.display = 'flex';
}

function goBackToStart() {
    document.getElementById('phase-rules').style.display = 'none';
    document.getElementById('phase-start').style.display = 'flex';
}

function proceedToBudget() {
    document.getElementById('phase-rules').style.display = 'none';
    document.getElementById('phase-budget').style.display = 'flex';
}

function goBackToRules() {
    document.getElementById('phase-budget').style.display = 'none';
    document.getElementById('phase-rules').style.display = 'flex';
}

// ==========================================
// 6. GAME PLAY LOGIC
// ==========================================
function startGame(planType) {
    selectedPlan = planType; // 🌟 บันทึกแผนการเงินที่เลือกไว้ใช้งานตอนจบ
    
    const TOTAL_MONEY = 4500;
    if(planType === 'A') {
        moneySpend = TOTAL_MONEY * 0.50;
        moneySaving = TOTAL_MONEY * 0.30;
        moneyEmergency = TOTAL_MONEY * 0.20;
    } else if(planType === 'B') {
        moneySpend = TOTAL_MONEY * 0.70;
        moneySaving = TOTAL_MONEY * 0.20;
        moneyEmergency = TOTAL_MONEY * 0.10;
    } else {
        moneySpend = TOTAL_MONEY * 0.90;
        moneySaving = TOTAL_MONEY * 0.10;
        moneyEmergency = 0;
    }

    eventQueue = [];
    let shuffledDaily = [...DAILY_EVENTS].sort(() => 0.5 - Math.random()).slice(0, 5);
    eventQueue = shuffledDaily.map(e => ({ ...e, isSpecial: false }));
    
    let randomSpecial = SPECIAL_EVENTS[Math.floor(Math.random() * SPECIAL_EVENTS.length)];
    eventQueue.splice(2, 0, { ...randomSpecial, isSpecial: true }); 

    updateDisplay();
    
    document.getElementById('phase-budget').style.display = 'none';
    document.getElementById('phase-game').style.display = 'flex';
    loadEvent();
}

function loadEvent() {
    clearInterval(timerInterval);
    if(currentEventIndex >= eventQueue.length) {
        endGame();
        return;
    }

    let progress = (currentEventIndex / eventQueue.length) * 100;
    document.getElementById('progress-bar').style.width = progress + "%";

    let ev = eventQueue[currentEventIndex];
    isSpecialEvent = ev.isSpecial;
    
    let prefix = isSpecialEvent ? UI_TEXT.specialPrefix[currentLang] : UI_TEXT.dailyPrefix[currentLang];
    document.getElementById('event-text').innerHTML = prefix + ev.text[currentLang];

    let choicesHtml = "";
    ev.choices.forEach((choice, index) => {
        choicesHtml += `
            <div class="slot interactive" onclick="makeChoice(${index})">
                <div class="slot-inner choice-text" style="font-size: 1.1rem;">${choice.text[currentLang]}</div>
            </div>
        `;
    });
    document.getElementById('choices-container').innerHTML = choicesHtml;

    timeLeft = 10;
    document.getElementById('timer-display').innerText = timeLeft;
    document.getElementById('timer-display').style.color = "#FFFFFF";

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer-display').innerText = timeLeft;
        if(timeLeft <= 3) document.getElementById('timer-display').style.color = "#FFCCCC";
        if(timeLeft <= 0) {
            clearInterval(timerInterval);
            makeChoice(-1); 
        }
    }, 1000);
}

function makeChoice(choiceIndex) {
    clearInterval(timerInterval);
    let ev = eventQueue[currentEventIndex];
    let choice;

    if (choiceIndex === -1) {
        choice = ev.choices[Math.floor(Math.random() * ev.choices.length)];
    } else {
        choice = ev.choices[choiceIndex];
    }

    let costAmount = ev.isSpecial ? choice.cost : choice.cost * 30;
    moneySpend += costAmount;
    
    if (moneySpend < 0) {
        let deficit = Math.abs(moneySpend);
        if (moneyEmergency > 0) {
            if (moneyEmergency >= deficit) {
                moneyEmergency -= deficit;
                moneySpend = 0; 
                deficit = 0;
            } else {
                deficit -= moneyEmergency;
                moneyEmergency = 0; 
                moneySpend = -deficit; 
            }
        }
        if (deficit > 0 && moneySaving > 0) {
            if (moneySaving >= deficit) {
                moneySaving -= deficit;
                moneySpend = 0; 
            } else {
                deficit -= moneySaving;
                moneySaving = 0; 
                moneySpend = -deficit; 
            }
        }
    }

    scoreMoney += choice.money || 0;
    scoreStress += choice.stress || 0;
    scoreDiscipline += choice.discipline || 0;
    scoreSaving += choice.saving || 0;
    scoreSpending += choice.spending || 0;
    scoreHappiness += choice.happiness || 0;

    updateDisplay();
    currentEventIndex++;
    
    document.getElementById('event-box').style.animation = 'none';
    setTimeout(() => {
        document.getElementById('event-box').style.animation = 'textFadeIn 0.3s ease';
        loadEvent();
    }, 50);
}

function updateDisplay() {
    document.getElementById('spend-display').innerText = moneySpend;
    document.getElementById('emergency-display').innerText = moneyEmergency;
    document.getElementById('saving-display').innerText = moneySaving;
}

function getTitle() {
    let totalScore = scoreDiscipline + scoreSaving - scoreSpending - scoreStress + scoreHappiness;
    if(totalScore >= 10) return { th: "เศรษฐีวัยรุ่น", en: "Teen Millionaire" };
    if(totalScore >= 5) return { th: "นักวางแผนอนาคต", en: "Future Planner" };
    if(totalScore >= 0) return { th: "วัยรุ่นสู้ชีวิต", en: "Survivor" };
    if(totalScore >= -5) return { th: "สายเปย์เป๋าแห้ง", en: "Broke Spender" };
    return { th: "วิกฤตการเงิน", en: "Financial Crisis" };
}

function endGame() {
    document.getElementById('phase-game').style.display = 'none';
    document.getElementById('phase-result').style.display = 'flex';

    document.getElementById('final-money').innerText = moneySpend + moneySaving + moneyEmergency + " ฿";
    document.getElementById('final-stress').innerText = scoreStress > 0 ? "+" + scoreStress : scoreStress;
    document.getElementById('final-happiness').innerText = scoreHappiness > 0 ? "+" + scoreHappiness : scoreHappiness;
    
    document.getElementById('final-discipline').innerText = scoreDiscipline;
    document.getElementById('final-spending').innerText = scoreSpending;
    document.getElementById('final-saving').innerText = scoreSaving;

    document.getElementById('result-title').innerText = getTitle()[currentLang];
}

function showAdvice() {
    document.getElementById('phase-result').style.display = 'none';
    document.getElementById('phase-advice').style.display = 'flex';
    
    let analysisResult = generateAdvice();
    document.getElementById('advice-text').innerHTML = `
        <div style="margin-bottom: 10px; font-weight: 800; color: #E88F6F;">${ANALYSIS_TEXT.behaviorHeader[currentLang]}:</div>
        ${analysisResult.text}
    `;
    
    renderRecommendations(analysisResult.topics);
}

// 🌟 ==========================================
// 🌟 7. ระบบคำนวณปัญหาแบบใหม่ (ตามที่คุณสั่ง) 🌟
// 🌟 ==========================================
function generateAdvice() {
    // 🔹 STEP 1: ปรับค่าชั่วคราวตาม “แผนการเงิน” ที่เลือกไว้
    let adjSaving = scoreSaving;
    let adjDiscipline = scoreDiscipline;
    let adjStress = scoreStress;
    let adjSpending = scoreSpending;
    let adjMoney = scoreMoney;

    if (selectedPlan === 'A') {
        adjSaving += 1;
        adjDiscipline += 1;
        adjStress += 1;
    } else if (selectedPlan === 'C') {
        adjSpending += 1;
        adjSaving -= 1;
        adjDiscipline -= 1;
    }

    // 🔹 STEP 2: Logic วิเคราะห์ “ปัญหา”
    let problem = "";
    let analysisText = "";
    let topics = new Set();

    // เช็ก "ไม่เข้าใจเงิน" ก่อน "ใช้เงินมั่ว" เพื่อไม่ให้โค้ดข้ามเงื่อนไขนี้ไป
    if (adjDiscipline <= -1 && adjSpending >= 1 && adjSaving <= -1) {
        problem = currentLang === 'th' ? "ไม่เข้าใจเงิน" : "Lack of Financial Knowledge";
        analysisText = currentLang === 'th' ? "ยังไม่เข้าใจบทบาทของเงิน" : "You do not fully understand the role of money.";
        topics = new Set(['mindset', 'spending', 'earning', 'investing']);
    } 
    else if (adjSpending >= 1 && adjDiscipline <= -1) {
        problem = currentLang === 'th' ? "ใช้เงินมั่ว" : "Reckless Spending";
        analysisText = currentLang === 'th' ? "คุณใช้เงินตามอารมณ์ ขาดการควบคุม" : "You spend emotionally and lack financial control.";
        topics = new Set(['mindset', 'spending', 'budgeting', 'protection']);
    } 
    else if (adjMoney <= 0 && adjDiscipline <= 0) {
        problem = currentLang === 'th' ? "ไม่มีแผน" : "No Plan";
        analysisText = currentLang === 'th' ? "ใช้เงินวันต่อวัน ไม่มีโครงสร้าง" : "You manage money day-to-day without a clear structure.";
        topics = new Set(['mindset', 'budgeting', 'goals']);
    } 
    else if (adjSaving <= -1) {
        problem = currentLang === 'th' ? "ไม่ออม" : "No Saving Habit";
        analysisText = currentLang === 'th' ? "ไม่มีนิสัยออม ใช้ก่อนเก็บ" : "You lack saving habits and tend to spend before saving.";
        topics = new Set(['budgeting', 'saving', 'goals']);
    } 
    else if (adjMoney <= -1 && adjSpending >= 1) {
        problem = currentLang === 'th' ? "เงินหมดเร็ว" : "Money Drains Fast";
        analysisText = currentLang === 'th' ? "เงินไหลออกเร็ว คุมไม่ได้" : "Your money flows out quickly and is hard to control.";
        topics = new Set(['spending', 'budgeting', 'saving', 'protection']);
    } 
    else if (adjStress >= 1) {
        problem = currentLang === 'th' ? "เครียด" : "Stressed";
        analysisText = currentLang === 'th' ? "การเงินของคุณไม่สมดุล อาจตึงเกินไป หรือใช้เพื่อความสุขมากไป" : "Your financial life is unbalanced, possibly too tight or spending too much for happiness.";
        topics = new Set(['spending', 'budgeting', 'saving', 'goals']);
    } 
    else {
        problem = currentLang === 'th' ? "สมดุลดี" : "Well Balanced";
        analysisText = currentLang === 'th' ? "ยอดเยี่ยม! คุณบริหารจัดการเงินได้ดีมาก" : "Excellent! You manage your money very well.";
        topics = new Set(['saving', 'investing', 'goals']);
    }

    // 🔹 STEP 3: สร้าง Plan Feedback
    let planFeedback = "";
    if (selectedPlan === 'A') {
        planFeedback = currentLang === 'th' ? "<b>Plan A (สายวางแผน):</b> คุณมีวินัยดี แต่ระวังเครียดเกินไป ควรเพิ่มงบความสุขเล็กน้อย" : "<b>Plan A:</b> Good discipline, but avoid overstressing. Add a little fun budget.";
    } else if (selectedPlan === 'B') {
        planFeedback = currentLang === 'th' ? "<b>Plan B (บาลานซ์):</b> คุณมีสมดุลที่ดี ควรรักษาและเริ่มตั้งเป้าหมายระยะยาว" : "<b>Plan B:</b> Great balance. Maintain this and set long-term goals.";
    } else if (selectedPlan === 'C') {
        planFeedback = currentLang === 'th' ? "<b>Plan C (สายใช้เงิน):</b> คุณมีความสุขกับการใช้เงิน แต่เสี่ยงเงินหมดเร็ว ควรเพิ่มการออมและการวางแผน" : "<b>Plan C:</b> You enjoy spending, but risk running out of money. Plan and save more.";
    }

    // รวมข้อความทั้งหมดให้ออกมาเป็น HTML เพื่อนำไปแสดงในหน้าเว็บเลย (สะดวกเหมือนรูปแบบ JSON ที่คุณตั้งไว้)
    let textColor = (problem === "สมดุลดี" || problem === "Well Balanced") ? "#84C5A1" : "#E06C6C";
    let issueLabel = currentLang === 'th' ? "ปัญหาที่พบ:" : "Detected Issue:";
    let analysisLabel = currentLang === 'th' ? "บทวิเคราะห์:" : "Analysis:";
    
    let html = `
        <div style="font-size: 1.1rem; color: ${textColor}; margin-bottom: 15px;">
            <b>${issueLabel}</b> ${problem}<br>
            <b style="color:#5A4A3A;">${analysisLabel}</b> <span style="color:#5A4A3A;">${analysisText}</span>
        </div>
        <div style="font-size: 1rem; color: #5A4A3A; padding: 12px; background: #FAF0E6; border-radius: 8px; border-left: 4px solid #E88F6F;">
            💡 <b>Feedback:</b><br>${planFeedback}
        </div>
    `;

    return { text: html, topics: topics };
}

function renderRecommendations(recommendations) {
    const tagsContainer = document.getElementById('rec-tags-container');
    tagsContainer.innerHTML = '';
    
    let sortedRecs = Array.from(recommendations).sort();
    
    sortedRecs.forEach(id => {
        const data = ADVICE_DATA[id];
        if(data) {
            const tag = document.createElement('div');
            tag.className = 'rec-tag';
            tag.textContent = data.title[currentLang]; 
            tag.onclick = () => openAdviceDetail(id);
            tagsContainer.appendChild(tag);
        }
    });
}

function openAdviceDetail(id) {
    currentAdviceId = id; 
    const data = ADVICE_DATA[id];
    document.getElementById('advice-detail-title').textContent = data.title[currentLang];
    document.getElementById('advice-detail-body').innerHTML = data.content[currentLang];
    document.getElementById('phase-advice').style.display = 'none';
    document.getElementById('phase-advice-detail').style.display = 'flex';
    window.scrollTo(0, 0);
}

function closeAdviceDetail() {
    currentAdviceId = null; 
    document.getElementById('phase-advice-detail').style.display = 'none';
    document.getElementById('phase-advice').style.display = 'flex';
}

function goBackToResult() {
    document.getElementById('phase-advice').style.display = 'none';
    document.getElementById('phase-result').style.display = 'flex';
}

function captureAndDownload(elementId) {
    const captureDiv = document.getElementById(elementId);
    html2canvas(captureDiv, {
        scale: 2, 
        backgroundColor: "#FFFFFF"
    }).then(canvas => {
        let link = document.createElement('a');
        link.download = 'My_Money_Advice.png';
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}

window.onload = function() {
    updateUI();
};