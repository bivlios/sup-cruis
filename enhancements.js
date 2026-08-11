(() => {
  const enhancementTranslations = {
    'Confirmed clients':'לקוחות מאושרים','Passengers':'נוסעים','Cruise expenses':'הוצאות ההפלגה','Expenses linked to this cruise':'הוצאות המשויכות להפלגה','No expenses linked to this cruise.':'אין הוצאות המשויכות להפלגה.','＋ Add expense to cruise':'＋ הוספת הוצאה להפלגה',
    'Daily work':'עבודה שוטפת',
    'Business tools':'כלים עסקיים',
    'Home':'בית',
    'Cruises':'הפלגות',
    'Cruises & clients':'הפלגות ולקוחות',
    'Est. profit':'רווח משוער',
    'Calendar':'לוח שנה',
    'Finance':'כספים',
    'Crew & suppliers':'צוות וספקים',
    'Crew and supplier details, contact information and agreed rates.':'פרטי צוות וספקים, פרטי קשר ותעריפים מוסכמים.',
    'Reports':'דוחות',
    'Open reminders':'פתיחת תזכורות',
    '＋ Add':'＋ הוספה',
    'Needs attention':'דורש טיפול',
    'Payments, follow-ups and tasks in one list':'תשלומים, מעקבים ומשימות ברשימה אחת',
    'View all reminders':'צפייה בכל התזכורות',
    'Cruise financial overview':'סקירה כספית של ההפלגות',
    'Open the detailed chart only when you need it':'פתיחת התרשים המפורט רק כשצריך',
    'All guest information forms':'כל טפסי מידע האורחים',
    'Open only when you need the full guest form register':'פתיחה רק כאשר צריך את רשימת הטפסים המלאה',
    'Keep every customer’s contact details, cruise, group size, Google Form, quote and payments in one client card.':'שמרו את פרטי הקשר, ההפלגה, גודל הקבוצה, טופס Google, הצעת המחיר והתשלומים בכרטיס לקוח אחד.',
    'Each cruise brings together its clients, crew and selected suppliers.':'כל הפלגה מרכזת את הלקוחות, הצוות והספקים שנבחרו.',
    'Open traveller form ↗':'פתיחת טופס נוסעים ↗',
    'Booking client':'לקוח מזמין',
    'The contact responsible for the booking, quote and payment.':'איש הקשר שאחראי להזמנה, להצעת המחיר ולתשלום.',
    'Traveller':'נוסע',
    'Each person who actually sails, including the booking client when applicable.':'כל אדם שמפליג בפועל, כולל הלקוח המזמין אם גם הוא משתתף בהפלגה.',
    'All traveller information forms':'כל טפסי מידע הנוסעים',
    'Open only when you need the full traveller form register':'פתיחה רק כאשר צריך את רשימת טפסי הנוסעים המלאה',
    'Traveller information forms':'טפסי מידע לנוסעים',
    'Import traveller responses':'ייבוא תשובות נוסעים',
    'Search travellers or booking clients':'חיפוש נוסעים או לקוחות מזמינים',
    'Expected travellers':'נוסעים צפויים',
    'Add traveller':'הוספת נוסע',
    'Edit traveller':'עריכת נוסע',
    'Save traveller':'שמירת נוסע',
    'Close traveller form':'סגירת טופס נוסע',
    'Traveller name':'שם הנוסע',
    'Guests':'נוסעים',
    'No guests match these filters.':'אין נוסעים התואמים לסינון.',
    'Delete this traveller?':'למחוק את הנוסע?',
    'Delete this client, their payments, guests, scheduled payments and unpaid commission?':'למחוק את הלקוח, התשלומים, הנוסעים, התשלומים המתוזמנים והעמלה שטרם שולמה?',
    'Guest form status saved':'סטטוס טופס הנוסע נשמר',
    'Guest form deadline saved':'מועד טופס הנוסע נשמר',
    'Create a departure used by clients, travellers and expenses.':'יצירת הפלגה שאליה משייכים לקוחות, נוסעים והוצאות.',
    'Create a departure used by clients, crew and expenses.':'יצירת הפלגה שאליה משייכים לקוחות, צוות והוצאות.',
    'Keep the client, cruise, group size, price and Google Form together in one card.':'שמרו את הלקוח, ההפלגה, גודל הקבוצה, המחיר וטופס Google יחד בכרטיס אחד.',
    'Keep the client, cruise, group size, room type, price and Google Form together in one card.':'שמרו את הלקוח, ההפלגה, גודל הקבוצה, סוג החדר, המחיר וטופס Google יחד בכרטיס אחד.',
    'Group size':'מספר אנשים בהזמנה',
    'Used only to calculate available places on the cruise.':'משמש רק לחישוב מספר המקומות הפנויים בהפלגה.',
    'Room type':'סוג חדר',
    'Room':'חדר',
    'Not decided':'טרם נקבע',
    'Single room':'חדר סינגל',
    'Small double room':'חדר זוגי קטן',
    'Large double room':'חדר זוגי גדול',
    'Places booked':'מקומות תפוסים',
    'places booked':'מקומות תפוסים',
    'Contact details':'פרטי קשר',
    'Who is the client and how can you reach them?':'מיהו הלקוח וכיצד ניתן ליצור איתו קשר?',
    'Booking and room':'הפלגה וחדר',
    'Choose the cruise, booking stage, group size and room.':'בחרו הפלגה, שלב הזמנה, מספר אנשים וסוג חדר.',
    'Price and follow-up':'מחיר ומעקב',
    'Keep the next action, booking price and payment deadline together.':'שמרו יחד את הפעולה הבאה, מחיר ההזמנה ומועד התשלום.',
    'Documents and notes':'מסמכים והערות',
    'Link the Google Form and save only useful operational notes.':'קשרו את טופס Google ושמרו רק הערות תפעוליות שימושיות.',
    'Room allocation by cruise':'חלוקת חדרים לפי הפלגה',
    'Room allocation report':'דוח חלוקת חדרים',
    'Booked places and room requirements for every cruise':'מקומות תפוסים ודרישות חדרים לכל הפלגה',
    'Single rooms':'חדרי סינגל',
    'Small double rooms':'חדרים זוגיים קטנים',
    'Large double rooms':'חדרים זוגיים גדולים',
    'Rooms not decided':'חדרים שטרם נקבעו',
    'Group & room':'קבוצה וחדר',
    'Confirmed bookings':'הזמנות מאושרות',
    'These group sizes use the cruise capacity.':'גדלי הקבוצות האלה מחושבים בקיבולת ההפלגה.',
    'Enquiries linked to this cruise':'פניות שמשויכות להפלגה',
    'These clients are interested but do not use capacity yet.':'לקוחות אלה מתעניינים אך עדיין אינם תופסים מקום.',
    'Room assignment':'שיבוץ חדר',
    'Choose a room type before the cruise.':'יש לבחור סוג חדר לפני ההפלגה.',
    'Paid-in-full client report':'דוח לקוחות ששילמו במלואו',
    'Clients whose recorded payments cover the booking price':'לקוחות שהתשלומים שנרשמו עבורם מכסים את מחיר ההזמנה',
    'Enquiries, bookings, group sizes, rooms, payments and balances':'פניות, הזמנות, מספר אנשים, חדרים, תשלומים ויתרות',
    'Double rooms':'חדרים זוגיים',
    'Confirmed group sizes':'מספר האנשים בהזמנות מאושרות',
    'Confirmed room choices':'בחירות חדר שאושרו',
    'Small and large double rooms':'חדרים זוגיים קטנים וגדולים',
    'No confirmed bookings.':'אין הזמנות מאושרות.',
    'Client':'לקוח',
    'Clients on this cruise':'לקוחות בהפלגה',
    'All customers linked to this cruise. Confirmed group sizes are used for capacity.':'כל הלקוחות שמשויכים להפלגה. גודל הקבוצות שאושרו משמש לחישוב הקיבולת.',
    'Clients, crew and selected suppliers for this departure.':'לקוחות, צוות וספקים שנבחרו להפלגה זו.',
    'Delete this client and all related payments, schedules and unpaid commission?':'למחוק את הלקוח ואת כל התשלומים, המועדים והעמלה שטרם שולמה הקשורים אליו?',
    '＋ Add client':'＋ הוספת לקוח',
    'Payments, expenses and invoices are managed here.':'תשלומים, הוצאות וחשבוניות מנוהלים כאן.',
    'Compare supplier offers and prepare quotes for clients.':'השוו הצעות מספקים והכינו הצעות מחיר ללקוחות.',
    'Payments & expenses':'תשלומים והוצאות',
    'Quotes':'הצעות מחיר',
    'Invoices':'חשבוניות',
    '＋ Money paid':'＋ כספים ששולמו',
    'Record money paid':'רישום כספים ששולמו',
    'Edit money paid':'עריכת תשלום שבוצע',
    'Save money paid':'שמירת התשלום',
    'Choose who received the money and record the completed outgoing payment.':'בחרו למי שולם הכסף ורשמו את התשלום שבוצע.',
    'Recipient type':'סוג מקבל התשלום',
    'Client refund':'החזר ללקוח',
    'Crew payment':'תשלום לאיש צוות',
    'Partner payment':'תשלום לשותף',
    'Money paid recorded':'התשלום שבוצע נרשם',
    'Choose the action you need:':'בחרו את הפעולה הדרושה:',
    'Client payments, balances and deadlines':'תשלומי לקוחות, יתרות ומועדים',
    'Supplier, crew and business expenses':'הוצאות ספקים, צוות ועסק',
    'Compare suppliers and prepare offers for clients.':'השוו ספקים והכינו הצעות ללקוחות.',
    '＋ Client quote':'＋ הצעה ללקוח',
    '＋ Supplier quote':'＋ הצעת ספק',
    'Supplier quotes':'הצעות מחיר מספקים',
    'Compare several offers for the same cruise and service, then choose one.':'השוו כמה הצעות לאותה הפלגה ולאותו שירות, ואז בחרו אחת.',
    'Service':'שירות',
    'Provider':'ספק',
    'Quote date':'תאריך הצעה',
    'Valid until':'בתוקף עד',
    'Price':'מחיר',
    'Client quotes':'הצעות מחיר ללקוחות',
    'Create, copy and email an offer directly from the client record.':'צרו, העתיקו ושלחו הצעה במייל ישירות מכרטיס הלקוח.',
    'Quote':'הצעה',
    'Attach each invoice to a client or supplier.':'שייכו כל חשבונית ללקוח או לספק.',
    '＋ Add invoice':'＋ הוספת חשבונית',
    '＋ Invoice':'＋ חשבונית',
    'For':'עבור',
    'Client / supplier':'לקוח / ספק',
    'Invoice number':'מספר חשבונית',
    'Issue date':'תאריך הפקה',
    'Due date':'מועד תשלום',
    'File':'קובץ',
    'One calendar for cruises, exhibitions, business events, tasks and payment deadlines.':'לוח אחד להפלגות, תערוכות, אירועים עסקיים, משימות ומועדי תשלום.',
    '＋ Add event':'＋ הוספת אירוע',
    'Previous month':'החודש הקודם',
    'Next month':'החודש הבא',
    'Today':'היום',
    'Exhibition':'תערוכה',
    'Event':'אירוע',
    'Online':'אונליין',
    'Task':'משימה',
    'Upcoming agenda':'סדר יום קרוב',
    'The next items in chronological order':'הפריטים הבאים לפי סדר תאריכים',
    'Customer type':'סוג לקוח',
    'New customer':'לקוח חדש',
    'Returning customer':'לקוח חוזר',
    'Crew role':'תפקיד בצוות',
    'SUP guide':'מדריך/ת SUP',
    'Other role':'תפקיד אחר',
    'Crew member':'איש צוות',
    'Cruise manager':'אחראי/ת הפלגה',
    'Open person details':'פתיחת פרטי איש קשר',
    'Close person details':'סגירת פרטי איש קשר',
    'Contact, assignments, expenses and documents in one place.':'פרטי קשר, שיוכים, הוצאות ומסמכים במקום אחד.',
    'Assigned cruises':'הפלגות משויכות',
    'No cruises assigned.':'אין הפלגות משויכות.',
    'Crew details':'פרטי צוות',
    'Sensitive information is stored only on this device in the prototype.':'מידע רגיש נשמר באבטיפוס רק במכשיר זה.',
    'Related expenses':'הוצאות קשורות',
    'No related expenses.':'אין הוצאות קשורות.',
    'Supplier invoices':'חשבוניות ספק',
    'No supplier invoices.':'אין חשבוניות ספק.',
    'Supplier quote history':'היסטוריית הצעות ספק',
    'No supplier quotes.':'אין הצעות מחיר מספק זה.',
    'Total recorded expenses':'סך ההוצאות שנרשמו',
    'Edit contact':'עריכת איש קשר',
    'Client stage / type':'שלב / סוג לקוח',
    'All stages / types':'כל השלבים / הסוגים',
    'Returning customer report':'דוח לקוחות חוזרים',
    'Returning customers across all booking stages':'לקוחות חוזרים בכל שלבי ההזמנה',
    'Returning customers':'לקוחות חוזרים',
    'Commissions':'עמלות',
    'Source':'מקור',
    'Driver / transport':'נהג / הסעה',
    'Exhibition website':'אתר התערוכה',
    'Save the event dates, website, location and preparation notes.':'שמרו את מועדי האירוע, האתר, המיקום ומשימות ההכנה.',
    'What would you like to add?':'מה תרצו להוסיף?',
    'Choose one action. The relevant form will open.':'בחרו פעולה אחת והטופס המתאים ייפתח.',
    'Close quick add':'סגירת הוספה מהירה',
    'New enquiry or booking':'פנייה חדשה או הזמנה',
    'New departure':'הפלגה חדשה',
    'Client payment':'תשלום לקוח',
    'Deposit or instalment':'מקדמה או תשלום',
    'Supplier or crew cost':'עלות ספק או צוות',
    'Compare an offer':'השוואת הצעה',
    'Invoice':'חשבונית',
    'Client or supplier document':'מסמך לקוח או ספק',
    'Meeting or business date':'פגישה או מועד עסקי',
    'Reminders':'תזכורות',
    'Items that are overdue or coming soon.':'פריטים באיחור או שמתקרבים.',
    'In-app reminders appear whenever this app is open.':'התזכורות בתוך האפליקציה מופיעות בכל פעם שהאפליקציה פתוחה.',
    'Enable computer notifications':'הפעלת התראות במחשב',
    'Close reminders':'סגירת תזכורות',
    'Contact, booking, quotes, invoices and payments in one place.':'פרטי קשר, הזמנה, הצעות מחיר, חשבוניות ותשלומים במקום אחד.',
    'Close client record':'סגירת כרטיס לקוח',
    'Cruise details':'פרטי הפלגה',
    'Clients, travellers, crew and selected suppliers for this departure.':'לקוחות, נוסעים, צוות וספקים שנבחרו להפלגה זו.',
    'Clients, passengers, crew and selected suppliers for this departure.':'לקוחות, נוסעים, צוות וספקים שנבחרו להפלגה זו.',
    'Close cruise details':'סגירת פרטי הפלגה',
    'Add supplier quote':'הוספת הצעת ספק',
    'Edit supplier quote':'עריכת הצעת ספק',
    'Save every offer before choosing the provider for a cruise.':'שמרו כל הצעה לפני בחירת הספק להפלגה.',
    'Close supplier quote form':'סגירת טופס הצעת ספק',
    'Catamaran company':'חברת קטמרן',
    'Skipper':'סקיפר',
    'Cook':'מבשל/ת',
    'Driver':'נהג',
    'Company / provider':'חברה / ספק',
    'Quoted price (€)':'מחיר מוצע (€)',
    'Shortlisted':'באופציה',
    'Selected':'נבחר',
    'Rejected':'נדחה',
    'Quote file':'קובץ הצעת מחיר',
    'Terms and inclusions':'תנאים ומה כלול',
    'What is included, cancellation terms and conditions':'מה כלול, תנאי ביטול ותנאים נוספים',
    'Internal notes':'הערות פנימיות',
    'Save supplier quote':'שמירת הצעת ספק',
    'Create client quote':'יצירת הצעת מחיר ללקוח',
    'Edit client quote':'עריכת הצעת מחיר ללקוח',
    'Prepare an offer that can be copied to WhatsApp or opened in email.':'הכינו הצעה שניתן להעתיק ל־WhatsApp או לפתוח במייל.',
    'Close client quote form':'סגירת טופס הצעה ללקוח',
    'Quote number':'מספר הצעה',
    'Offer amount (€)':'סכום ההצעה (€)',
    'Draft':'טיוטה',
    'Accepted':'אושר',
    'Declined':'נדחה',
    'What is included':'מה כלול',
    'Cruise dates, accommodation, SUP activities, meals and exclusions':'מועדי הפלגה, לינה, פעילויות SUP, ארוחות ומה לא כלול',
    'Personal message / remarks':'הודעה אישית / הערות',
    'Save client quote':'שמירת הצעה ללקוח',
    'Add invoice':'הוספת חשבונית',
    'Edit invoice':'עריכת חשבונית',
    'Attach the invoice to the correct client or supplier.':'שייכו את החשבונית ללקוח או לספק המתאים.',
    'Close invoice form':'סגירת טופס חשבונית',
    'Invoice belongs to':'החשבונית שייכת ל־',
    'Supplier / company':'ספק / חברה',
    'Open':'פתוח',
    'Invoice file':'קובץ חשבונית',
    'Invoice remarks':'הערות לחשבונית',
    'Save invoice':'שמירת חשבונית',
    'Add event':'הוספת אירוע',
    'Edit event':'עריכת אירוע',
    'Add a meeting, deadline or other business event to the calendar.':'הוסיפו פגישה, מועד או אירוע עסקי אחר ללוח השנה.',
    'Close event form':'סגירת טופס אירוע',
    'Event title':'שם האירוע',
    'Event type':'סוג אירוע',
    'Meeting':'פגישה',
    'End date':'תאריך סיום',
    'Time':'שעה',
    'Website / link':'אתר / קישור',
    'Event notes':'הערות לאירוע',
    'Save event':'שמירת אירוע',
    'Open client':'פתיחת לקוח',
    'Open details':'פתיחת פרטים',
    'Create quote':'יצירת הצעה',
    'Add client invoice':'הוספת חשבונית ללקוח',
    'Copy quote':'העתקת הצעה',
    'Open email':'פתיחה במייל',
    'Choose':'בחירה',
    'Create expense':'יצירת הוצאה',
    'Download file':'הורדת קובץ',
    'No supplier quotes yet.':'עדיין אין הצעות מספקים.',
    'No client quotes yet.':'עדיין אין הצעות ללקוחות.',
    'No invoices yet.':'עדיין אין חשבוניות.',
    'No reminders for the next 14 days.':'אין תזכורות ל־14 הימים הקרובים.',
    'No calendar items for this month.':'אין פריטים בלוח בחודש זה.',
    'No travellers assigned.':'אין נוסעים משויכים.',
    'No clients assigned.':'אין לקוחות משויכים.',
    'No travellers in this booking yet.':'עדיין אין נוסעים בהזמנה זו.',
    'Passengers in this booking':'נוסעים בהזמנה זו',
    'The booked client is the primary passenger. Add everyone else travelling under the same booking.':'הלקוח שהוזמן הוא הנוסע הראשי. הוסיפו את כל מי שמפליג במסגרת אותה הזמנה.',
    'Passenger list':'רשימת נוסעים',
    'All booked passengers assigned to this cruise.':'כל הנוסעים שהוזמנו ושויכו להפלגה זו.',
    'Add passenger':'הוספת נוסע',
    '＋ Add passenger':'＋ הוספת נוסע',
    'Edit passenger':'עריכת נוסע',
    'Save passenger':'שמירת נוסע',
    'Close passenger form':'סגירת טופס נוסע',
    'Full name':'שם מלא',
    'Primary passenger':'נוסע ראשי',
    'Partner':'בן/בת זוג',
    'Child':'ילד/ה',
    'Friend':'חבר/ה',
    'Passenger notes':'הערות לנוסע',
    'Dietary needs, health notes or travel arrangements':'צרכים תזונתיים, מידע רפואי או סידורי נסיעה',
    'Choose the booking this passenger belongs to.':'בחרו את ההזמנה שאליה שייך הנוסע.',
    'A booked client is the primary passenger. Add the other people travelling under the same booking here.':'לקוח שהוזמן הוא הנוסע הראשי. כאן מוסיפים את שאר האנשים שמפליגים במסגרת אותה הזמנה.',
    'This is the booked client and primary passenger.':'זהו הלקוח שהוזמן והנוסע הראשי.',
    'passengers entered':'נוסעים הוזנו',
    'Passenger details complete':'פרטי הנוסע הושלמו',
    'Missing travel details':'חסרים פרטי נסיעה',
    'Date of birth':'תאריך לידה',
    'Gender':'מין',
    'Passport number':'מספר דרכון',
    'Select':'בחירה',
    'Female':'נקבה',
    'Male':'זכר',
    'Non-binary':'אחר/לא בינארי',
    'Sensitive information:':'מידע רגיש:',
    'Sensitive information':'מידע רגיש',
    'passport and birth-date details are stored only in this browser in the prototype. Download a backup and share cruise reports only with authorised people.':'פרטי דרכון ותאריך לידה נשמרים באבטיפוס רק בדפדפן זה. הורידו גיבוי ושתפו דוחות הפלגה רק עם גורמים מורשים.',
    'Sensitive passenger information is stored only in this browser in the prototype. Share this report only with authorised people.':'מידע רגיש של נוסעים נשמר באבטיפוס רק בדפדפן זה. שתפו את הדוח רק עם גורמים מורשים.',
    'Copy cruise report':'העתקת דוח הפלגה',
    'Download cruise report CSV':'הורדת דוח הפלגה CSV',
    'Cruise report copied':'דוח ההפלגה הועתק',
    'No passengers or crew are assigned to this cruise.':'לא משויכים נוסעים או אנשי צוות להפלגה זו.',
    'The passenger list already matches the booking group size. Increase the group size in the client card first.':'רשימת הנוסעים כבר תואמת למספר האנשים בהזמנה. יש להגדיל תחילה את מספר האנשים בכרטיס הלקוח.',
    'Mark a client as Booked before adding passengers.':'יש להעביר לקוח לסטטוס „הוזמן” לפני הוספת נוסעים.',
    'Choose a booked client for this passenger.':'יש לבחור לקוח בסטטוס „הוזמן” עבור נוסע זה.',
    'Delete this passenger?':'למחוק את הנוסע?',
    'The primary passenger is the booked client. Edit the passenger instead of deleting it.':'הנוסע הראשי הוא הלקוח שהוזמן. יש לערוך את הנוסע במקום למחוק אותו.',
    'Passenger deleted':'הנוסע נמחק',
    'Entered passengers':'נוסעים שהוזנו',
    'Expected from booking':'צפויים לפי ההזמנה',
    'Complete passenger details':'השלמת פרטי נוסעים',
    'Passenger':'נוסע',
    'Crew':'צוות',
    'Role / booking':'תפקיד / הזמנה',
    'Contact':'פרטי קשר',
    'Passengers and crew':'נוסעים וצוות',
    'Booking clients':'לקוחות מזמינים',
    'The people responsible for the booking, quote and payment.':'האנשים שאחראים להזמנה, להצעת המחיר ולתשלום.',
    'Travellers on board':'נוסעים בהפלגה',
    'Everyone who actually sails. Add the booking client here too if they are travelling.':'כל מי שמפליג בפועל. אם הלקוח המזמין משתתף בהפלגה, יש להוסיף גם אותו כנוסע.',
    'Travellers in this booking':'נוסעים בהזמנה זו',
    'These are the people who will actually sail under this client’s booking.':'אלה האנשים שיפליגו בפועל במסגרת ההזמנה של הלקוח.',
    '＋ Add traveller':'＋ הוספת נוסע',
    'A traveller is a person who will actually sail. Select the client whose booking this person belongs to.':'נוסע הוא אדם שמפליג בפועל. יש לבחור את הלקוח שהנוסע שייך להזמנה שלו.',
    'Relationship to booking client':'קשר ללקוח המזמין',
    'Booking client, partner, child...':'הלקוח המזמין, בן/בת זוג, ילד/ה...',
    'Booking clients, travellers, crew and selected suppliers for this departure.':'לקוחות מזמינים, נוסעים, צוות וספקים שנבחרו להפלגה זו.',
    'No crew assigned.':'אין צוות משויך.',
    'No selected suppliers.':'אין ספקים שנבחרו.',
    'Selected supplier quotes':'הצעות ספקים שנבחרו',
    'Travellers':'נוסעים',
    'Client follow-up':'מעקב לקוח',
    'Guest form':'טופס נוסע',
    'Exhibition task':'משימת תערוכה',
    'Content task':'משימת תוכן',
    'Supplier payment':'תשלום לספק',
    'Cruise manager payment':'תשלום לאחראי/ת הפלגה',
    'Invoice payment':'תשלום חשבונית',
    'Computer notifications enabled':'ההתראות במחשב הופעלו',
    'Computer notifications were not allowed':'ההתראות במחשב לא אושרו',
    'Computer notifications are not supported here':'התראות מחשב אינן נתמכות כאן',
    'Quote copied. Paste it into WhatsApp or email.':'ההצעה הועתקה. ניתן להדביק אותה ב־WhatsApp או במייל.',
    'Supplier quote selected':'הצעת הספק נבחרה',
    'Expense created from selected supplier quote':'נוצרה הוצאה מהצעת הספק שנבחרה',
    'Delete the linked expense before deleting this quote':'יש למחוק את ההוצאה המקושרת לפני מחיקת ההצעה',
    'Supplier quote deleted':'הצעת הספק נמחקה',
    'Client quote deleted':'הצעת הלקוח נמחקה',
    'Invoice deleted':'החשבונית נמחקה',
    'Event deleted':'האירוע נמחק',
    'Attachment is not stored on this device':'הקובץ המצורף אינו שמור במכשיר זה',
    'Open website ↗':'פתיחת האתר ↗',
    'Edit task':'עריכת משימה',
    'Edit exhibition task':'עריכת משימת תערוכה',
    'Delete this supplier quote?':'למחוק את הצעת הספק?',
    'Delete this client quote?':'למחוק את הצעת הלקוח?',
    'Delete this invoice?':'למחוק את החשבונית?',
    'Delete this event?':'למחוק את האירוע?',
    'Create an unpaid expense from this selected quote?':'ליצור הוצאה שטרם שולמה מהצעה זו?',
    'Supplier quote saved':'הצעת הספק נשמרה',
    'Client quote saved':'הצעת הלקוח נשמרה',
    'Invoice saved':'החשבונית נשמרה',
    'Event saved':'האירוע נשמר',
    'More':'נוספים',
    '↓ Download unsynced copy':'↓ הורדת עותק שלא סונכרן',
    'This workspace changed on another device. Your recent edits were kept — use "Download unsynced copy" in Reports to save them':'סביבת העבודה שונתה במכשיר אחר. העריכות האחרונות נשמרו — יש להשתמש ב"הורדת עותק שלא סונכרן" בדוחות כדי לשמור אותן',
    'This device held records the cloud did not have. They were kept — use "Download unsynced copy" in Reports to save them':'במכשיר זה נמצאו רשומות שלא היו בענן. הן נשמרו — יש להשתמש ב"הורדת עותק שלא סונכרן" בדוחות כדי לשמור אותן',
    'Unsynced copy downloaded. Use "Restore from backup" if you need those records back':'העותק שלא סונכרן הורד. יש להשתמש ב"שחזור מגיבוי" כדי להחזיר את הרשומות',
    'download a backup regularly. Restoring a backup replaces the records currently stored on this device. Receipt, quote and invoice files are not included in the JSON backup and are cleared during restore.':'יש להוריד גיבוי באופן קבוע. שחזור גיבוי מחליף את הרשומות השמורות במכשיר. קובצי קבלות, הצעות מחיר וחשבוניות אינם נכללים בגיבוי JSON ונמחקים בעת השחזור.',
    'The event end date cannot be earlier than the start date.':'תאריך סיום האירוע לא יכול להיות מוקדם מתאריך ההתחלה.',
    'Expense created':'נוצרה הוצאה',
    'Edit client':'עריכת לקוח',
    'Move linked clients, expenses, quotes, invoices and crew before deleting this cruise':'יש להעביר לקוחות, הוצאות, הצעות מחיר, חשבוניות ואנשי צוות מקושרים לפני מחיקת ההפלגה',
    '＋ General marketing task':'＋ משימת שיווק כללית',
    'Each exhibition has its own preparation tasks and deadlines.':'לכל תערוכה יש משימות הכנה ומועדים משלה.',
    'General marketing tasks':'משימות שיווק כלליות',
    'Social media, website and content tasks':'משימות לרשתות חברתיות, לאתר ולתוכן',
    'Tasks for this exhibition':'משימות לתערוכה זו',
    'Every task here belongs only to this exhibition and also appears in reminders and the calendar.':'כל משימה כאן משויכת רק לתערוכה זו ומופיעה גם בתזכורות ובלוח השנה.',
    '＋ Add task with deadline':'＋ הוספת משימה עם מועד',
    'No tasks yet for this exhibition.':'עדיין אין משימות לתערוכה זו.',
    '＋ Add first task':'＋ הוספת משימה ראשונה',
    'Responsible:':'אחראי/ת:',
    'This task belongs to':'המשימה משויכת לתערוכה',
    'The task will appear in reminders and the calendar.':'המשימה תופיע בתזכורות ובלוח השנה.',
    'Enter a valid website address.':'יש להזין כתובת אתר תקינה.',
    '＋ Record money received':'＋ רישום כסף שהתקבל',
    '＋ Add future payment':'＋ תשלום עתידי מלקוח',
    'Future client payments':'תשלומים עתידיים מלקוחות',
    'Payments expected from clients, with amount and deadline.':'תשלומים שצפויים להתקבל מלקוחות, כולל סכום ומועד.',
    'Record money received':'רישום כסף שהתקבל',
    'Use this only after the payment has actually arrived.':'יש להשתמש באפשרות זו רק לאחר שהכסף התקבל בפועל.',
    'Save received payment':'שמירת כסף שהתקבל',
    'Pay partner':'תשלום לשותף',
    'Save partner payment':'שמירת תשלום לשותף',
    'Partner payment recorded':'התשלום לשותף נרשם',
    'Add future payment':'תשלום עתידי מלקוח',
    'Edit future payment':'עריכת תשלום עתידי מלקוח',
    'Plan money expected from a client and set its deadline.':'רישום כסף שצפוי להתקבל מלקוח וקביעת המועד שלו.',
    'Close future payment form':'סגירת טופס תשלום עתידי',
    'Save future payment':'שמירת תשלום עתידי מלקוח',
    'Future payment':'תשלום עתידי מלקוח',
    'Scheduled':'צפוי',
    'Data safety':'שמירת הנתונים',
    'Back up your data':'גיבוי הנתונים',
    'Download a copy every Sunday and keep it in a safe folder.':'הורידו עותק בכל יום ראשון ושמרו אותו בתיקייה בטוחה.',
    'Last backup: Not yet':'גיבוי אחרון: טרם בוצע',
    'Weekly data backup':'גיבוי נתונים שבועי',
    'Data backup':'גיבוי נתונים',
    'Download a copy of the app data and keep it in a safe folder.':'הורידו עותק של נתוני האפליקציה ושמרו אותו בתיקייה בטוחה.',
    'Back up now':'גיבוי עכשיו',
    'use the coloured backup button at the bottom of the menu every Sunday. Restoring a backup replaces the records currently stored on this device. Receipt, quote and invoice files are not included in the JSON backup and are cleared during restore.':'השתמשו בכל יום ראשון בכפתור הגיבוי הצבעוני שבתחתית התפריט. שחזור גיבוי מחליף את הרשומות השמורות במכשיר. קובצי קבלות, הצעות מחיר וחשבוניות אינם נכללים בגיבוי JSON ונמחקים בעת השחזור.',
    'Google Form response link (optional)':'קישור לתשובת Google Form (אופציונלי)',
    'Paste the individual response link':'הדביקו קישור לתשובה האישית',
    'Google Form response':'תשובת Google Form',
    'Linked to this client':'מקושר ללקוח זה',
    'No Google Form response linked':'לא קושרה תשובת Google Form',
    'Keep the individual response link with the client record.':'שמרו את הקישור לתשובה האישית בתוך כרטיס הלקוח.',
    'Open linked response ↗':'פתיחת התשובה המקושרת ↗',
    'Link / change form':'קישור / שינוי הטופס',
    'Create and send quote':'יצירת ושליחת הצעת מחיר',
    'Copy for WhatsApp':'העתקה ל־WhatsApp',
    'Open WhatsApp':'פתיחה ב־WhatsApp',
    'Client quote saved. Choose email or WhatsApp from the client card.':'הצעת המחיר נשמרה. ניתן לבחור מייל או WhatsApp מתוך כרטיס הלקוח.',
    'Cruises, tasks and deadlines':'הפלגות, משימות ומועדים',
    'Open calendar':'פתיחת לוח השנה',
    'Currency':'מטבע',
    'Euro (€)':'אירו (€)',
    'Israeli shekel (₪)':'שקל ישראלי (₪)',
    'US dollar ($)':'דולר אמריקאי ($)',
    'Amount received':'סכום שהתקבל',
    'Expected amount':'סכום צפוי',
    'EUR equivalent for balance (€)':'שווי באירו לצורך חישוב היתרה (€)',
    'for balance':'לחישוב היתרה',
    'Enter the EUR equivalent used for the client balance.':'יש להזין את השווי באירו לצורך חישוב יתרת הלקוח.',
    'Start with client details and the total booking price. When the booking is confirmed, select Booked and add the final payment deadline.':'התחילו בפרטי הלקוח ובמחיר ההזמנה הכולל. כשההזמנה מאושרת, בחרו „הוזמן” והוסיפו את מועד התשלום הסופי.',
    'Total booking price (€)':'מחיר ההזמנה הכולל (€)',
    'Enter the full agreed price. Deposits and payments are recorded separately in Finance.':'יש להזין את מלוא המחיר שסוכם. מקדמות ותשלומים נרשמים בנפרד בכספים.',
    '＋ Record client payment':'＋ קבלת תשלום מלקוח',
    'Record client payment':'קבלת תשלום מלקוח',
    'First set the total booking price in the client card. Use this form only after money has actually arrived.':'תחילה יש לקבוע את מחיר ההזמנה הכולל בכרטיס הלקוח. בטופס זה משתמשים רק לאחר שהכסף התקבל בפועל.',
    'Only booked clients with a total booking price appear here.':'כאן מופיעים רק לקוחות שהוגדרו כהזמנה ושנקבע להם מחיר הזמנה כולל.',
    'Total booking price':'מחיר הזמנה כולל',
    'Received so far':'התקבל עד כה',
    'Remaining balance':'יתרה לתשלום',
    'No booked clients with a booking price':'אין לקוחות שהוזמנו עם מחיר הזמנה',
    'Open a client card, select Booked, and enter the total booking price first.':'יש לפתוח כרטיס לקוח, לבחור „הוזמן” ולהזין תחילה את מחיר ההזמנה הכולל.',
    'Save client payment':'שמירת תשלום הלקוח',
    'Booking price':'מחיר הזמנה',
    'Open the client card and enter the total booking price first.':'יש לפתוח את כרטיס הלקוח ולהזין תחילה את מחיר ההזמנה הכולל.',
    'Mark the client as Booked before recording a payment.':'יש לסמן את הלקוח כ„הוזמן” לפני רישום תשלום.',
    'Add exhibition task':'הוספת משימה לתערוכה',
    'Build a simple, persistent publishing calendar.':'בניית לוח פרסום פשוט ומתמשך.',
    'Close commission form':'סגירת טופס עמלה',
    'Close content task form':'סגירת טופס משימת תוכן',
    'Close cruise form':'סגירת טופס הפלגה',
    'Close exhibition form':'סגירת טופס תערוכה',
    'Close exhibition task form':'סגירת טופס משימת תערוכה',
    'Close expense form':'סגירת טופס הוצאה',
    'Close menu':'סגירת התפריט',
    'Close partner form':'סגירת טופס שותף',
    'Close payment form':'סגירת טופס תשלום',
    'Create a departure used by clients, guests and expenses.':'יצירת הפלגה שאליה משייכים לקוחות, אורחים והוצאות.',
    'Expense':'הוצאה',
    'Filtered business records':'רשומות העסק בהתאם לסינון',
    'Finance work area':'אזור עבודה כספי',
    'Open menu':'פתיחת התפריט',
    'PayPal':'PayPal',
    'Responsible person':'אחראי/ת',
    'Review the agreement and partner payment.':'בדיקת ההסכם והתשלום לשותף.',
    'Save the collaborator and their standard referral agreement.':'שמירת השותף והסכם ההפניה הקבוע שלו.',
    'Supplier quote':'הצעת מחיר מספק',
    'Switch language':'החלפת שפה',
    'SUPCruise Manager':'מערכת ניהול SUPCruise',
    'Client and supplier deadlines':'מועדי תשלום של לקוחות וספקים',
    'Client receivables and supplier payables':'גבייה מלקוחות ותשלומים לספקים',
    'Commission owed':'עמלה לתשלום',
    'Consistent revenue, cash, expense and profit figures':'השוואה עקבית בין הכנסות, תקבולים, הוצאות ורווח',
    'Crew list':'רשימת צוות',
    'Deleted client':'לקוח שנמחק',
    'EUR equivalent':'שווי באירו',
    'Location not entered':'לא הוזן מיקום',
    'Needs matching':'דורש שיוך',
    'No contact details':'אין פרטי קשר',
    'No cruises entered.':'לא הוזנו הפלגות.',
    'No cruises for this year.':'אין הפלגות בשנה זו.',
    'No diet stated':'לא צוינו דרישות תזונה',
    'No email':'אין אימייל',
    'No expenses match this year and category.':'אין הוצאות התואמות לשנה ולקטגוריה.',
    'No health note':'לא צוינה הערה רפואית',
    'No matching clients.':'אין לקוחות תואמים.',
    'No matching crew contacts.':'אין אנשי צוות התואמים לחיפוש.',
    'No matching supplier contacts.':'אין ספקים התואמים לחיפוש.',
    'No open deadlines.':'אין מועדים פתוחים.',
    'No payments match this search.':'אין תשלומים התואמים לחיפוש.',
    'No preparation tasks yet. Click “+ Task” to add one.':'אין משימות הכנה. לחצו על „+ משימה” כדי להוסיף.',
    'No upcoming cruise entered.':'לא הוזנה הפלגה קרובה.',
    'None reported':'לא דווח',
    'Not stated':'לא צוין',
    'Paid date / deadline':'תאריך תשלום / מועד אחרון',
    'Rate not entered':'לא הוזן תעריף',
    'Recorded costs':'עלויות שנרשמו',
    'Remaining balances':'יתרות שנותרו',
    'Revenue minus costs':'הכנסות פחות עלויות',
    'To suppliers':'לספקים',
    'Unnamed traveller':'נוסע ללא שם',
    'Unsupported website protocol':'כתובת האתר חייבת להתחיל ב־http או https',
    'Edit details':'עריכת פרטים',
    'Per charter agreement':'לפי הסכם ההשכרה',
    'Asked about SUP experience level.':'שאלה לגבי רמת הניסיון ב־SUP.',
    'Two guests, vegetarian.':'שני אורחים, צמחוניים.',
    'Send cabin photos and payment link.':'לשלוח תמונות של התאים וקישור לתשלום.',
    'Celebrating anniversary.':'חוגגים יום נישואין.',
    'Sunrise paddles and island coves.':'חתירות זריחה ומפרצים בין האיים.',
    '30% deposit':'מקדמה של 30%',
    'July awareness campaign':'קמפיין מודעות לחודש יולי',
    'Available August places':'מקומות פנויים באוגוסט',
    'Crew behind the scenes':'הצוות מאחורי הקלעים',
    'Guest testimonial':'המלצה של אורח',
    'SUP cove video':'סרטון SUP במפרץ',
    'Supplier confirmation call':'שיחת אישור עם ספק',
    'Confirm crew and provisioning for Cyclades.':'לאשר צוות ואספקה להפלגת הקיקלאדים.'
  };
  Object.assign(HE, enhancementTranslations);
  Object.entries(enhancementTranslations).forEach(([english, hebrew]) => { EN[hebrew] = english; });
  translationReady = true;

  const enhancementSeed = {
    supplierQuotes: [
      {id:701,cruiseId:101,service:'Catamaran company',providerName:'Blue Sea Charters',quoteDate:'2026-07-08',validUntil:'2026-07-31',amount:6500,status:'Selected',terms:'Catamaran, marina fees and final cleaning included.',notes:'Flexible cancellation up to 30 days.',attachmentName:'',expenseId:301}
    ],
    clientQuotes: [
      {id:801,clientId:1,cruiseId:101,quoteNumber:'SC-2026-001',quoteDate:'2026-07-20',validUntil:'2026-07-30',amount:1600,status:'Draft',includes:'7-night cruise, SUP activities, accommodation and meals.',notes:''}
    ],
    invoices: [
      {id:901,partyType:'Client',clientId:2,supplierName:'',supplierPersonId:null,cruiseId:101,invoiceNumber:'SC-INV-2026-01',issueDate:'2026-07-12',dueDate:'2026-07-26',amount:960,status:'Paid',attachmentName:'',notes:'Deposit invoice'}
    ],
    events: [
      {id:1001,title:'Supplier confirmation call',type:'Meeting',date:'2026-07-29',endDate:'',time:'10:00',location:'Online',website:'',notes:'Confirm crew and provisioning for Cyclades.'}
    ]
  };
  Object.entries(enhancementSeed).forEach(([key, value]) => { seed[key] = clone(value); });
  Object.keys(enhancementSeed).forEach(key => {
    if (!Array.isArray(state[key])) state[key] = workspaceMode === 'demo' ? clone(enhancementSeed[key]) : [];
  });

  function normalizeEnhancementState(target = state) {
    Object.keys(enhancementSeed).forEach(key => {
      if (!Array.isArray(target[key])) target[key] = [];
    });
    target.clients.forEach(client => {
      client.customerType = client.customerType === 'Returning customer' ? 'Returning customer' : 'New customer';
      client.googleFormUrl = client.googleFormUrl || '';
    });
    target.payments.forEach(payment => {
      payment.currency = ['EUR', 'ILS', 'USD'].includes(payment.currency) ? payment.currency : 'EUR';
      payment.eurAmount = payment.currency === 'EUR' ? Number(payment.amount || 0) : Number(payment.eurAmount || 0);
    });
    target.installments.forEach(item => {
      item.currency = ['EUR', 'ILS', 'USD'].includes(item.currency) ? item.currency : 'EUR';
      item.eurAmount = item.currency === 'EUR' ? Number(item.amount || 0) : Number(item.eurAmount || 0);
    });
    target.expenses.forEach(expense => {
      const recipientTypes = ['Supplier','Crew member','Cruise manager','Partner','Client refund','Other'];
      if (!recipientTypes.includes(expense.recipientType)) {
        const person = target.people.find(item => Number(item.id) === Number(expense.payeePersonId) || String(item.name || '').trim().toLowerCase() === String(expense.payee || '').trim().toLowerCase());
        expense.recipientType = expense.managedBy === 'commission' || expense.partnerId ? 'Partner' : expense.clientId || expense.category === 'Client refund' ? 'Client refund' : expense.category === 'Cruise manager payment' ? 'Cruise manager' : person?.type === 'Crew' ? 'Crew member' : person?.type === 'Supplier' ? 'Supplier' : 'Other';
      }
      expense.entryMode = expense.entryMode === 'paid' ? 'paid' : 'expense';
      expense.partnerId = expense.partnerId ? Number(expense.partnerId) : null;
      expense.clientId = expense.clientId ? Number(expense.clientId) : null;
    });
    target.exhibitions.forEach(exhibition => {
      exhibition.website = exhibition.website || '';
      if (!Array.isArray(exhibition.tasks)) exhibition.tasks = [];
    });
    target.supplierQuotes.forEach(quote => {
      quote.cruiseId = quote.cruiseId ? Number(quote.cruiseId) : null;
      quote.amount = Number(quote.amount || 0);
      quote.attachmentName = quote.attachmentName || '';
      quote.expenseId = quote.expenseId ? Number(quote.expenseId) : null;
      if (quote.expenseId && !target.expenses.some(expense => Number(expense.id) === Number(quote.expenseId))) quote.expenseId = null;
      if (!quote.expenseId) {
        const explicitlyLinked = target.expenses.find(expense =>
          expense.managedBy === 'supplierQuote' &&
          Number(expense.quoteId) === Number(quote.id)
        );
        const legacyMatches = quote.status === 'Selected' ? target.expenses.filter(expense =>
          Number(expense.cruiseId) === Number(quote.cruiseId) &&
          String(expense.payee || '').trim().toLowerCase() === String(quote.providerName || '').trim().toLowerCase() &&
          Number(expense.amount || 0) === Number(quote.amount || 0) &&
          expense.category === expenseCategoryForQuote(quote.service)
        ) : [];
        const linkedExpense = explicitlyLinked || (legacyMatches.length === 1 ? legacyMatches[0] : null);
        if (linkedExpense) {
          quote.expenseId = linkedExpense.id;
          linkedExpense.managedBy = 'supplierQuote';
          linkedExpense.quoteId = quote.id;
        }
      }
    });
    target.clientQuotes.forEach(quote => {
      quote.clientId = Number(quote.clientId);
      quote.cruiseId = quote.cruiseId ? Number(quote.cruiseId) : null;
      quote.amount = Number(quote.amount || 0);
    });
    target.invoices.forEach(invoice => {
      invoice.clientId = invoice.clientId ? Number(invoice.clientId) : null;
      invoice.supplierPersonId = invoice.supplierPersonId ? Number(invoice.supplierPersonId) : null;
      invoice.cruiseId = invoice.cruiseId ? Number(invoice.cruiseId) : null;
      invoice.amount = Number(invoice.amount || 0);
      invoice.attachmentName = invoice.attachmentName || '';
    });
    target.events.forEach(event => {
      event.endDate = event.endDate || '';
      event.time = event.time || '';
      event.location = event.location || '';
      event.website = event.website || '';
      event.notes = event.notes || '';
    });
  }
  normalizeEnhancementState();

  const baseNormalizeRestoredStateEnhancement = normalizeRestoredState;
  normalizeRestoredState = function() {
    baseNormalizeRestoredStateEnhancement();
    normalizeEnhancementState();
  };

  function safeWebUrl(value) {
    const text = String(value || '').trim();
    return /^https?:\/\//i.test(text) ? text : '';
  }

  function openEnhancedFileDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('supcruise-files', 2);
      request.onupgradeneeded = () => {
        const database = request.result;
        if (!database.objectStoreNames.contains('receipts')) database.createObjectStore('receipts');
        if (!database.objectStoreNames.contains('documents')) database.createObjectStore('documents');
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  openReceiptDB = openEnhancedFileDB;
  clearReceipts = async function() {
    const database = await openEnhancedFileDB();
    await new Promise((resolve, reject) => {
      const transaction = database.transaction(['receipts', 'documents'], 'readwrite');
      transaction.objectStore('receipts').clear();
      transaction.objectStore('documents').clear();
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });
    database.close();
  };

  async function saveDocumentFile(key, file) {
    if (!file) return;
    const database = await openEnhancedFileDB();
    await new Promise((resolve, reject) => {
      const transaction = database.transaction('documents', 'readwrite');
      transaction.objectStore('documents').put(file, key);
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });
    database.close();
  }

  async function getDocumentFile(key) {
    const database = await openEnhancedFileDB();
    const file = await new Promise((resolve, reject) => {
      const request = database.transaction('documents').objectStore('documents').get(key);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    database.close();
    return file;
  }

  async function deleteDocumentFile(key) {
    const database = await openEnhancedFileDB();
    await new Promise((resolve, reject) => {
      const transaction = database.transaction('documents', 'readwrite');
      transaction.objectStore('documents').delete(key);
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });
    database.close();
  }

  async function downloadSavedDocument(key, name) {
    const file = await getDocumentFile(key);
    if (!file) {
      showToast('Attachment is not stored on this device');
      return;
    }
    downloadBlob(file, name || file.name || 'document');
  }

  const baseTranslatePhraseEnhancement = translatePhrase;
  const interfaceTokenTranslations = [
    ['No contact details','אין פרטי קשר'],
    ['Rate not entered','לא הוזן תעריף'],
    ['Location not entered','לא הוזן מיקום'],
    ['No diet stated','לא צוינו דרישות תזונה'],
    ['No health note','לא צוינה הערה רפואית'],
    ['No client notes','אין הערות לקוח'],
    ['Needs matching','דורש שיוך'],
    ['Deleted client','לקוח שנמחק'],
    ['No email','אין אימייל'],
    ['Not stated','לא צוין'],
    ['None reported','לא דווח'],
    ['calculated commission','עמלה מחושבת'],
    ['referred','הפנה/תה את'],
    ['Returning customer','לקוח חוזר'],
    ['Pending client payment','ממתין לתשלום הלקוח'],
    ['Paid in full','שולם במלואו'],
    ['Still to pay','נותר לתשלום'],
    ['New enquiry','פנייה חדשה'],
    ['Final balance','יתרה סופית'],
    ['balance','יתרה'],
    ['Not sent','לא נשלח'],
    ['Scheduled payment','תשלום מתוכנן'],
    ['Bank transfer','העברה בנקאית'],
    ['Credit card','כרטיס אשראי'],
    ['Check','צ׳ק'],
    ['Google Search','חיפוש Google'],
    ['Website / SEO','אתר / SEO'],
    ['Catamaran company','חברת קטמרן'],
    ['Main client','לקוח ראשי'],
    ['New customer','לקוח חדש'],
    ['Intermediate','בינוני'],
    ['Advanced','מתקדם'],
    ['Vegetarian','צמחוני/ת'],
    ['Shortlisted','באופציה'],
    ['Selected','נבחר'],
    ['Rejected','נדחה'],
    ['Accepted','אושר'],
    ['Declined','נדחה'],
    ['Cancelled','בוטל'],
    ['Received','התקבל'],
    ['Draft','טיוטה'],
    ['Sent','נשלח'],
    ['Open','פתוח'],
    ['Paid','שולם'],
    ['Contacted','נוצר קשר'],
    ['Considering','בבדיקה'],
    ['Booked','הוזמן'],
    ['Missing','חסר'],
    ['Skipper','סקיפר'],
    ['Cook & hostess','מבשל/ת ומארח/ת'],
    ['SUP guide','מדריך/ת SUP'],
    ['Cook','מבשל/ת'],
    ['Driver','נהג'],
    ['Online','אונליין'],
    ['Supplier','ספק'],
    ['Traveller','נוסע'],
    ['Guest testimonial','המלצת אורח'],
    ['SUP cove video','סרטון SUP במפרץ'],
    ['Available August places','מקומות פנויים באוגוסט'],
    ['Crew behind the scenes','הצוות מאחורי הקלעים'],
    ['Supplier confirmation call','שיחת אישור עם הספק'],
    ['Choose a room type before the cruise.','יש לבחור סוג חדר לפני ההפלגה.']
  ];
  translatePhrase = function(value) {
    let translated = baseTranslatePhraseEnhancement(value);
    if (appLanguage === 'he') {
      interfaceTokenTranslations.forEach(([english, hebrew]) => {
        translated = translated.split(english).join(hebrew);
      });
      translated = translated
        .replace(/(\d+)\s*\/\s*(\d+)\s+complete/g, '$1/$2 הושלמו')
        .replace(/^(\d+) enquiry$/, '$1 פנייה')
        .replace(/^(\d+) booking$/, '$1 הזמנה')
        .replace(/^(\d+) reminders need attention · (\d+) overdue$/, '$1 תזכורות דורשות טיפול · $2 באיחור')
        .replace(/^(\d+) reminders need attention$/, '$1 תזכורות דורשות טיפול')
        .replace(/^(\d+)\s*\/\s*(\d+) travellers$/, '$1/$2 נוסעים')
        .replace(/^(\d+)\s*\/\s*(\d+) clients$/, '$1/$2 לקוחות')
        .replace(/\b1 invoice\b/g, '1 חשבונית')
        .replace(/\b(\d+) invoices\b/g, '$1 חשבוניות')
        .replace(/^From (.+)$/, 'החל מ־$1')
        .replace(/(.+?)\s*\/\s*cruise/g, '$1 / הפלגה')
        .replace(/(\d+(?:[.,]\d+)?)%\s+of booking/g, '$1% מההזמנה')
        .replace(/(.+?)\s+per booking/g, '$1 לכל הזמנה')
        .replace(/(.+?)\s+per cruise/g, '$1 להפלגה')
        .replace(/(.+?)\s+already paid/g, '$1 כבר שולם');
    } else {
      interfaceTokenTranslations.forEach(([english, hebrew]) => {
        translated = translated.split(hebrew).join(english);
      });
      translated = translated
        .replace(/(\d+)\s*\/\s*(\d+)\s+הושלמו/g, '$1/$2 complete')
        .replace(/^(\d+) פנייה$/, '$1 enquiry')
        .replace(/^(\d+) פניות$/, '$1 enquiries')
        .replace(/^(\d+) הזמנה$/, '$1 booking')
        .replace(/^(\d+) הזמנות$/, '$1 bookings')
        .replace(/^לתשלום עד (.+)$/, 'Due $1')
        .replace(/^מעקב: (.+)$/, 'Follow-up: $1')
        .replace(/^תשלום: (.+)$/, 'Payment: $1')
        .replace(/^מחיקה: (.+)$/, 'Delete $1')
        .replace(/^השלמה: (.+)$/, 'Complete $1')
        .replace(/^מועד הטופס עבור (.+)$/, 'Form deadline for $1')
        .replace(/^מועד התשלום עבור (.+)$/, 'Payment deadline for $1')
        .replace(/^מועד התשלום לשותף עבור (.+)$/, 'Partner payment deadline for $1')
        .replace(/^(\d+) תזכורות דורשות טיפול · (\d+) באיחור$/, '$1 reminders need attention · $2 overdue')
        .replace(/^(\d+) תזכורות דורשות טיפול$/, '$1 reminders need attention')
        .replace(/^(\d+)\s*\/\s*(\d+) נוסעים$/, '$1/$2 travellers')
        .replace(/^(\d+)\s*\/\s*(\d+) לקוחות$/, '$1/$2 clients')
        .replace(/1 חשבונית/g, '1 invoice')
        .replace(/(\d+) חשבוניות/g, '$1 invoices')
        .replace(/^החל מ־(.+)$/, 'From $1')
        .replace(/(.+?)\s*\/\s*הפלגה/g, '$1 / cruise')
        .replace(/(\d+(?:[.,]\d+)?)%\s+מההזמנה/g, '$1% of booking')
        .replace(/(.+?)\s+לכל הזמנה/g, '$1 per booking')
        .replace(/(.+?)\s+להפלגה/g, '$1 per cruise')
        .replace(/(.+?)\s+כבר שולם/g, '$1 already paid');
    }
    return translated;
  };

  const baseTranslateInterfaceEnhancement = translateInterface;
  translateInterface = function(root = document) {
    baseTranslateInterfaceEnhancement(root);
    const extraSelector = 'summary,.module-summary-title,.module-summary-help,.panel-actionbar>span,.panel-actionbar>div>strong,.panel-actionbar>div>span,.calendar-legend span,.people-definition-strip strong,.people-definition-strip small,.booking-client-badge,.returning-badge,.client-stay-summary,.client-form-section legend,.client-section-note,.room-compatibility-note,.room-allocation-chip span,.room-allocation-chip strong,.person-detail-rate span,.person-detail-rate strong,.person-facts span,.person-facts strong,.sensitive-person-note,.sensitive-person-note strong,.sensitive-inline-note,.detail-section-head p,.detail-kpi span,.entity-row-main span,.detail-section .entity-row-main strong,.google-form-row strong,.google-form-row a,.reminder-settings span,.agenda-main strong,.agenda-main span,.exhibition-link,.focus-item-title,.focus-item-meta,.exhibition-task-head strong,.exhibition-task-head span,.exhibition-task-context span,.exhibition-task-meta span,.exhibition-task-meta b,.exhibition-task-empty span,.exhibition-summary strong,.exhibition-task .subtext,.sidebar-calendar-copy strong,.sidebar-calendar-copy small,.sidebar-backup-kicker,.sidebar-backup strong,.sidebar-backup p,.sidebar-backup small,.quick-action-grid strong,.manual-import-note,.contact .subtext,.contact-rate,.task-title,#expensePayeeLabel,#clientTableBody td:nth-child(4) .subtext,#clientDetailBody .detail-hero .subtext,#partnerTableBody td:nth-child(2),#partnerTableBody .subtext,#guestTableBody td:nth-child(2),#guestTableBody td:nth-child(6),#guestTableBody td:nth-child(7),#paymentTableBody td:nth-child(2) strong,#installmentTableBody td:nth-child(2) strong,#crewManifestBody td';
    root.querySelectorAll(extraSelector).forEach(element => {
      [...element.childNodes].filter(node => node.nodeType === Node.TEXT_NODE && node.nodeValue.trim()).forEach(node => {
        const translated = translatePhrase(node.nodeValue);
        if (translated !== node.nodeValue) node.nodeValue = translated;
      });
    });
  };

  function currentClientRows() {
    return state.clients.filter(client =>
      (clientFilter === 'all' ||
        (clientFilter === 'enquiry' && !['Booked', 'Cancelled'].includes(client.stage)) ||
        (clientFilter === 'booked' && client.stage === 'Booked' && !isPaid(client)) ||
        (clientFilter === 'paid' && isPaid(client)) ||
        (clientFilter === 'cancelled' && client.stage === 'Cancelled')) &&
      matchesSearch(
        [client.name, client.phone, client.email, client.source, client.notes, cruiseName(client.cruiseId), partnerBy(client.partnerId)?.name, client.customerType, client.partySize, client.roomType],
        searchFilters.clients
      )
    );
  }

  function setupClientFormSections() {
    const form = document.querySelector('#clientForm');
    const originalGrid = form?.querySelector(':scope > .form-grid');
    if (!form || !originalGrid || form.querySelector('.client-form-sections')) return;
    const sections = [
      {
        title:'Contact details',
        note:'Who is the client and how can you reach them?',
        names:['name','customerType','phone','email','source','partnerId']
      },
      {
        title:'Booking and room',
        note:'Choose the cruise, booking stage, group size and room.',
        names:['stage','cruiseId','partySize','roomType']
      },
      {
        title:'Price and follow-up',
        note:'Keep the next action, booking price and payment deadline together.',
        names:['followup','bookingValue','paymentDue']
      },
      {
        title:'Documents and notes',
        note:'Link the Google Form and save only useful operational notes.',
        names:['googleFormUrl','notes']
      }
    ];
    const wrapper = document.createElement('div');
    wrapper.className = 'client-form-sections';
    sections.forEach(section => {
      const fieldset = document.createElement('fieldset');
      fieldset.className = 'client-form-section';
      const legend = document.createElement('legend');
      legend.textContent = section.title;
      const note = document.createElement('p');
      note.className = 'client-section-note';
      note.textContent = section.note;
      const grid = document.createElement('div');
      grid.className = 'form-grid';
      section.names.forEach(name => {
        const control = form.elements.namedItem(name);
        const label = control?.closest?.('label');
        if (label) grid.appendChild(label);
      });
      fieldset.append(legend, note, grid);
      wrapper.appendChild(fieldset);
    });
    originalGrid.replaceWith(wrapper);
    const roomLabel = form.elements.roomType?.closest('label');
    if (roomLabel && !document.querySelector('#roomCompatibilityNote')) {
      const note = document.createElement('small');
      note.className = 'field-help room-compatibility-note';
      note.id = 'roomCompatibilityNote';
      note.setAttribute('aria-live', 'polite');
      roomLabel.appendChild(note);
    }
  }

  function setupEnhancedReportOptions() {
    const typeSelect = document.querySelector('#reportType');
    if (typeSelect && !typeSelect.querySelector('option[value="rooms"]')) {
      const option = new Option('Room allocation by cruise', 'rooms');
      typeSelect.querySelector('option[value="finance"]')?.before(option);
    }
    const stageSelect = document.querySelector('#reportStage');
    if (stageSelect && !stageSelect.querySelector('option[value="paid-full"]')) {
      const option = new Option('Paid in full', 'paid-full');
      const cancelledOption = [...stageSelect.options].find(item => item.value === 'Cancelled');
      stageSelect.insertBefore(option, cancelledOption || stageSelect.lastElementChild);
    }
  }

  function setupPersonDetailModal() {
    if (document.querySelector('#personDetailModal')) return;
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.id = 'personDetailModal';
    backdrop.innerHTML = `
      <div class="modal large person-detail-modal" role="dialog" aria-modal="true" aria-labelledby="personDetailTitle">
        <div class="modal-head">
          <div><h2 id="personDetailTitle">Contact details</h2><p>Contact, assignments, expenses and documents in one place.</p></div>
          <button class="close" data-close="personDetailModal" aria-label="Close person details">×</button>
        </div>
        <div id="personDetailBody"></div>
        <div class="modal-actions" id="personDetailActions"></div>
      </div>`;
    document.body.insertBefore(backdrop, document.querySelector('#toast'));
  }

  function roomCompatibility() {
    const form = document.querySelector('#clientForm');
    const note = document.querySelector('#roomCompatibilityNote');
    if (!form || !note) return;
    const size = Math.max(1, Number(form.elements.partySize.value) || 1);
    const room = form.elements.roomType.value;
    const stage = form.elements.stage.value;
    let level = 'ok';
    let english = 'Room choice matches the group size.';
    let hebrew = 'בחירת החדר מתאימה למספר האנשים.';
    if (room === 'Not decided') {
      level = stage === 'Booked' ? 'warning' : 'neutral';
      english = stage === 'Booked' ? 'Choose a room type before confirming the booking.' : 'The room can be decided later, before the booking is confirmed.';
      hebrew = stage === 'Booked' ? 'יש לבחור סוג חדר לפני אישור ההזמנה.' : 'אפשר לבחור חדר בהמשך, לפני אישור ההזמנה.';
    } else if (size === 1 && room.includes('double')) {
      level = 'warning';
      english = 'A double room is selected for 1 person. Check the price and arrangement.';
      hebrew = 'נבחר חדר זוגי לאדם אחד. יש לבדוק את המחיר והסידור.';
    } else if (size > 1 && room === 'Single room') {
      level = 'warning';
      english = `A single room is selected for ${size} people. Check whether more rooms are needed.`;
      hebrew = `נבחר חדר סינגל ל־${size} אנשים. יש לבדוק אם דרושים חדרים נוספים.`;
    } else if (size > 2 && room.includes('double')) {
      level = 'warning';
      english = `${size} people may need more than one room. Add the arrangement to the notes.`;
      hebrew = `ייתכן ש־${size} אנשים זקוקים ליותר מחדר אחד. יש לציין את הסידור בהערות.`;
    }
    note.dataset.level = level;
    note.textContent = appLanguage === 'he' ? hebrew : english;
  }

  setupClientFormSections();
  setupEnhancedReportOptions();
  setupPersonDetailModal();
  roomCompatibility();

  const baseRenderClientsEnhancement = renderClients;
  renderClients = function() {
    baseRenderClientsEnhancement();
    const rows = currentClientRows();
    const tableRows = [...document.querySelectorAll('#clientTableBody tr')];
    if (rows.length !== tableRows.length) return;
    tableRows.forEach((row, index) => {
      const client = rows[index];
      const hasPassenger = passengersForClient(client.id).length > 0;
      row.classList.toggle('passenger-client-row', hasPassenger);
      row.classList.add('clickable-client-row');
      row.dataset.openClientRow = String(client.id);
      row.tabIndex = 0;
      row.setAttribute('role', 'button');
      row.setAttribute('aria-label', `${translatedText('Open client')}: ${client.name}`);
      const name = row.querySelector('.client-cell strong');
      if (name && client.customerType === 'Returning customer') {
        name.insertAdjacentHTML('afterend', '<span class="returning-badge">Returning customer</span>');
      }
      const cruiseCell = row.querySelectorAll('td')[1];
      if (cruiseCell) {
        const summary = cruiseCell.querySelector('.subtext') || cruiseCell.appendChild(document.createElement('div'));
        summary.className = 'subtext client-stay-summary';
        const size = clientPartySize(client);
        summary.textContent = appLanguage === 'he'
          ? `${size === 1 ? 'אדם אחד' : `${size} אנשים`} · חדר: ${translatedText(client.roomType || 'Not decided')}`
          : `${size} ${size === 1 ? 'person' : 'people'} · Room: ${translatedText(client.roomType || 'Not decided')}`;
      }
      const actionCell = row.querySelector('td:last-child');
      if (actionCell) {
        actionCell.innerHTML = `<span class="row-open-cue">${translatedText('Open client')} <b aria-hidden="true">›</b></span>`;
      }
      const stageCell = row.querySelector('td[data-label="Stage"]');
      if (hasPassenger && stageCell && !stageCell.querySelector('.passenger-list-badge')) {
        stageCell.insertAdjacentHTML('beforeend', `<span class="passenger-list-badge">${translatedText('Passenger')}</span>`);
      }
    });
  };

  const baseRenderOperationsEnhancement = renderOperations;
  renderOperations = function() {
    baseRenderOperationsEnhancement();
    const cruises = state.cruises.slice().sort((a, b) => a.startDate.localeCompare(b.startDate));
    const cards = [...document.querySelectorAll('#cruiseCards .cruise-card')];
    cards.forEach((card, index) => {
      const cruise = cruises[index];
      if (!cruise) return;
      const clientCount = bookedClientPlacesFor(cruise.id);
      card.insertAdjacentHTML('afterbegin', '<div class="cruise-yacht-hero" aria-hidden="true"><img class="cruise-yacht-icon" data-supcruise-image="yacht" src="assets/yacht-icon.png?v=20260812" alt="" draggable="false" decoding="async"><i class="cruise-wave cruise-wave-one"></i><i class="cruise-wave cruise-wave-two"></i></div>');
      const capacity = card.querySelector('.cruise-top .status');
      if (capacity) {
        const cancelled = cruiseIsCancelled(cruise);
        capacity.textContent = cancelled ? translatedText('Cancelled cruise') : `${clientCount}/${cruise.capacity} ${appLanguage === 'he' ? 'מקומות תפוסים' : 'places booked'}`;
        capacity.classList.toggle('cancelled', cancelled);
        capacity.classList.toggle('booked', !cancelled);
      }
      const actions = card.querySelector('.cruise-actions');
      if (actions) {
        const cancelled = cruiseIsCancelled(cruise);
        actions.innerHTML = `<button class="btn primary compact-btn" type="button" data-open-cruise="${cruise.id}">Open details</button><button class="icon-action" type="button" data-edit-cruise="${cruise.id}">Edit</button>${cancelled ? `<span class="status cancelled">${translatedText('Cancelled cruise')}</span><button class="icon-action danger" type="button" data-remove-cruise="${cruise.id}">Remove cruise</button>` : `<button class="icon-action danger" type="button" data-cancel-cruise="${cruise.id}">Cancel cruise</button>`}`;
      }
    });
  };

  renderExhibitions = function() {
    const list = document.querySelector('#exhibitionList');
    const year = document.querySelector('#marketingYear')?.value || 'all';
    const rows = state.exhibitions
      .filter(exhibition => year === 'all' || yearOf(exhibition.startDate) === year)
      .sort((a, b) => a.startDate.localeCompare(b.startDate));
    list.innerHTML = rows.map(exhibition => {
      const tasks = exhibition.tasks || [];
      const done = tasks.filter(task => task.done).length;
      const website = safeWebUrl(exhibition.website);
      const taskRows = tasks.slice().sort((a, b) => a.dueDate.localeCompare(b.dueDate)).map(task => {
        const deadlineClass = !task.done && task.dueDate < TODAY ? 'overdue' : !task.done && task.dueDate <= addDays(TODAY, 7) ? 'soon' : '';
        return `<div class="exhibition-task ${task.done ? 'done' : ''}">
          <input type="checkbox" data-toggle-exhibition-task="${exhibition.id}:${task.id}" ${task.done ? 'checked' : ''} aria-label="Complete ${esc(task.title)}">
          <div class="exhibition-task-main">
            <strong>${esc(task.title)}</strong>
            <div class="exhibition-task-meta">
              <span class="exhibition-deadline ${deadlineClass}"><b>Deadline</b> ${formatDate(task.dueDate)}</span>
              ${task.owner ? `<span><b>Responsible:</b> ${esc(task.owner)}</span>` : ''}
            </div>
          </div>
          <div class="entity-row-actions"><button class="icon-action" data-edit-exhibition-task="${exhibition.id}:${task.id}">Edit task</button><button class="icon-action danger" data-delete-exhibition-task="${exhibition.id}:${task.id}">Delete</button></div>
        </div>`;
      }).join('');
      return `<article class="card exhibition-card">
        <div class="exhibition-top">
          <div>
            <div class="exhibition-title-row"><h3>${esc(exhibition.name)}</h3><span class="status ${exhibition.status === 'Completed' ? 'paid' : exhibition.status === 'Cancelled' ? 'cancelled' : 'waiting'}">${esc(exhibition.status)}</span></div>
            <p class="exhibition-meta">${formatDate(exhibition.startDate)} – ${formatDate(exhibition.endDate)} · ${esc(exhibition.location || 'Location not entered')}</p>
            ${website ? `<a class="exhibition-link" href="${esc(website)}" target="_blank" rel="noopener">Open website ↗</a>` : ''}
          </div>
          <div class="exhibition-actions"><button class="icon-action" data-edit-exhibition="${exhibition.id}">Edit</button><button class="icon-action danger" data-delete-exhibition="${exhibition.id}">Delete</button></div>
        </div>
        <div class="exhibition-summary"><span><small>Budget</small><strong>${euro(exhibition.budget)}</strong></span><span><small>Tasks</small><strong>${done}/${tasks.length} complete</strong></span><span><small>Notes</small><strong>${esc(exhibition.notes || '—')}</strong></span></div>
        <section class="exhibition-task-section">
          <div class="exhibition-task-head">
            <div><strong>Tasks for this exhibition</strong><span>Every task here belongs only to this exhibition and also appears in reminders and the calendar.</span></div>
            <button class="btn secondary compact-btn" data-add-exhibition-task="${exhibition.id}">＋ Add task with deadline</button>
          </div>
          <div class="exhibition-tasks">${taskRows || `<div class="exhibition-task-empty"><span>No tasks yet for this exhibition.</span><button class="text-btn" data-add-exhibition-task="${exhibition.id}">＋ Add first task</button></div>`}</div>
        </section>
      </article>`;
    }).join('') || empty('No exhibitions for this period.');
  };

  const baseRenderPeopleEnhancement = renderPeople;
  renderPeople = function() {
    baseRenderPeopleEnhancement();
    ['Crew','Supplier'].forEach(type => {
      const people = state.people.filter(person => person.type === type && matchesSearch([person.name, person.role, person.phone, person.email, person.rate], searchFilters.people));
      const listId = type === 'Crew' ? '#crewList' : '#supplierList';
      const contacts = [...document.querySelectorAll(`${listId} .contact`)];
      contacts.forEach((contact, index) => {
        const person = people[index];
        if (!person) return;
        contact.classList.add('clickable-person-row');
        contact.dataset.openPersonRow = String(person.id);
        contact.tabIndex = 0;
        contact.setAttribute('role', 'button');
        contact.setAttribute('aria-label', `${translatedText('Open person details')}: ${person.name}`);
        const actions = contact.querySelector('.contact-actions');
        if (actions) {
          actions.insertAdjacentHTML('beforebegin', `<span class="row-open-cue person-row-cue">${translatedText('Open details')} <b aria-hidden="true">›</b></span>`);
        }
        if (type === 'Supplier') {
          const invoiceCount = state.invoices.filter(invoice => invoice.partyType === 'Supplier' && (Number(invoice.supplierPersonId) === Number(person.id) || invoice.supplierName === person.name)).length;
          const subtext = contact.querySelector('.subtext');
          const invoiceLabel = appLanguage === 'he' ? (invoiceCount === 1 ? 'חשבונית' : 'חשבוניות') : (invoiceCount === 1 ? 'invoice' : 'invoices');
          if (subtext) subtext.insertAdjacentHTML('beforeend', ` · ${invoiceCount} ${invoiceLabel}`);
          if (actions) actions.insertAdjacentHTML('afterbegin', `<button class="icon-action" data-create-supplier-invoice="${person.id}">＋ Invoice</button>`);
        }
      });
    });
  };

  function renderSupplierQuotes() {
    const target = document.querySelector('#supplierQuoteTableBody');
    if (!target) return;
    const rows = state.supplierQuotes.slice().sort((a, b) => String(b.quoteDate || '').localeCompare(String(a.quoteDate || '')));
    target.innerHTML = rows.map(quote => {
      const selected = quote.status === 'Selected';
      const statusClass = selected ? 'booked' : quote.status === 'Rejected' ? 'cancelled' : 'waiting';
      return `<tr class="${selected ? 'selected-quote-row' : ''}">
        ${dataCell('Cruise', esc(cruiseName(quote.cruiseId)))}
        ${dataCell('Service', `<strong>${esc(translatedText(quote.service))}</strong>`)}
        ${dataCell('Provider', `${esc(quote.providerName)}${quote.attachmentName ? `<div class="subtext">${esc(quote.attachmentName)}</div>` : ''}`)}
        ${dataCell('Quote date', formatDate(quote.quoteDate))}
        ${dataCell('Valid until', formatDate(quote.validUntil))}
        ${dataCell('Price', `<strong>${euro(quote.amount)}</strong>`, 'number')}
        ${dataCell('Status', `<span class="status ${statusClass}">${esc(translatedText(quote.status))}</span>`)}
        ${dataCell('Actions', `<div class="actions-cell"><button class="icon-action" data-edit-supplier-quote="${quote.id}">Edit</button>${!selected ? `<button class="icon-action" data-select-supplier-quote="${quote.id}">Choose</button>` : ''}${selected && !quote.expenseId ? `<button class="icon-action" data-create-quote-expense="${quote.id}">Create expense</button>` : ''}${quote.attachmentName ? `<button class="icon-action" data-download-document="supplierQuote:${quote.id}" data-document-name="${esc(quote.attachmentName)}">Download file</button>` : ''}<button class="icon-action danger" data-delete-supplier-quote="${quote.id}">Delete</button></div>`)}
      </tr>`;
    }).join('') || `<tr>${dataCell('Quotes', empty('No supplier quotes yet.'))}</tr>`;
  }

  function renderClientQuotes() {
    const target = document.querySelector('#clientQuoteTableBody');
    if (!target) return;
    const rows = state.clientQuotes.slice().sort((a, b) => String(b.quoteDate || '').localeCompare(String(a.quoteDate || '')));
    target.innerHTML = rows.map(quote => {
      const client = clientBy(quote.clientId);
      const statusClass = quote.status === 'Accepted' ? 'paid' : quote.status === 'Declined' ? 'cancelled' : quote.status === 'Sent' ? 'booked' : 'waiting';
      return `<tr>
        ${dataCell('Client', `<strong>${esc(client?.name || 'Deleted client')}</strong>`)}
        ${dataCell('Cruise', esc(cruiseName(quote.cruiseId)))}
        ${dataCell('Quote', `<strong>${esc(quote.quoteNumber)}</strong><div class="subtext">${formatDate(quote.quoteDate)}</div>`)}
        ${dataCell('Valid until', formatDate(quote.validUntil))}
        ${dataCell('Amount', `<strong>${euro(quote.amount)}</strong>`, 'number')}
        ${dataCell('Status', `<span class="status ${statusClass}">${esc(translatedText(quote.status))}</span>`)}
        ${dataCell('Actions', `<div class="actions-cell"><button class="icon-action" data-edit-client-quote="${quote.id}">Edit</button><button class="icon-action" data-copy-client-quote="${quote.id}">Copy quote</button>${client?.email ? `<button class="icon-action" data-email-client-quote="${quote.id}">Open email</button>` : ''}<button class="icon-action danger" data-delete-client-quote="${quote.id}">Delete</button></div>`)}
      </tr>`;
    }).join('') || `<tr>${dataCell('Quotes', empty('No client quotes yet.'))}</tr>`;
  }

  function invoicePartyName(invoice) {
    if (invoice.partyType === 'Client') return clientBy(invoice.clientId)?.name || 'Deleted client';
    return state.people.find(person => Number(person.id) === Number(invoice.supplierPersonId))?.name || invoice.supplierName || 'Supplier';
  }

  function renderInvoices() {
    const target = document.querySelector('#invoiceTableBody');
    if (!target) return;
    const rows = state.invoices.slice().sort((a, b) => String(b.issueDate || '').localeCompare(String(a.issueDate || '')));
    target.innerHTML = rows.map(invoice => {
      const statusClass = invoice.status === 'Paid' ? 'paid' : invoice.status === 'Cancelled' ? 'cancelled' : invoice.status === 'Sent' ? 'booked' : 'waiting';
      return `<tr>
        ${dataCell('For', `<span class="status ${invoice.partyType === 'Client' ? 'booked' : 'waiting'}">${esc(translatedText(invoice.partyType))}</span>`)}
        ${dataCell('Client / supplier', `<strong>${esc(invoicePartyName(invoice))}</strong>`)}
        ${dataCell('Cruise', esc(cruiseName(invoice.cruiseId)))}
        ${dataCell('Invoice number', esc(invoice.invoiceNumber))}
        ${dataCell('Issue date', formatDate(invoice.issueDate))}
        ${dataCell('Due date', formatDate(invoice.dueDate), invoice.status !== 'Paid' && invoice.dueDate && invoice.dueDate < TODAY ? 'overdue' : '')}
        ${dataCell('File', invoice.attachmentName ? `<button class="text-btn file-name" data-download-document="invoice:${invoice.id}" data-document-name="${esc(invoice.attachmentName)}">${esc(invoice.attachmentName)} ↓</button>` : '—')}
        ${dataCell('Amount', `<strong>${euro(invoice.amount)}</strong>`, 'number')}
        ${dataCell('Status', `<span class="status ${statusClass}">${esc(translatedText(invoice.status))}</span>`)}
        ${dataCell('Actions', `<div class="actions-cell"><button class="icon-action" data-edit-invoice="${invoice.id}">Edit</button><button class="icon-action danger" data-delete-invoice="${invoice.id}">Delete</button></div>`)}
      </tr>`;
    }).join('') || `<tr>${dataCell('Invoices', empty('No invoices yet.'))}</tr>`;
  }

  let activeFinancePanel = 'cash';
  function renderFinancePanels() {
    document.querySelectorAll('[data-finance-panel]').forEach(button => button.classList.toggle('active', button.dataset.financePanel === activeFinancePanel));
    document.querySelector('#financeCashPanel').hidden = activeFinancePanel !== 'cash';
    document.querySelector('#financeQuotesPanel').hidden = activeFinancePanel !== 'quotes';
    document.querySelector('#financeInvoicesPanel').hidden = activeFinancePanel !== 'invoices';
    renderSupplierQuotes();
    renderClientQuotes();
    renderInvoices();
    const providerOptions = state.people.slice().sort((a, b) => a.name.localeCompare(b.name)).map(person => `<option value="${esc(person.name)}">${esc(person.role || person.type)}</option>`).join('');
    document.querySelector('#supplierQuoteProviders').innerHTML = providerOptions;
    document.querySelector('#invoiceSupplierOptions').innerHTML = providerOptions;
  }

  const baseRenderReportsCustomerType = renderReports;
  function renderClientReportEnhanced() {
    renderReportFilters();
    updateReportControlVisibility('clients');
    const year = document.querySelector('#reportYear').value;
    const source = document.querySelector('#reportSource').value;
    const stage = document.querySelector('#reportStage').value;
    const rows = state.clients.filter(client =>
      (year === 'all' || clientYear(client) === year) &&
      (source === 'all' || client.source === source) &&
      (stage === 'all' ||
        (stage === 'returning' && client.customerType === 'Returning customer') ||
        (stage === 'paid-full' && isPaid(client)) ||
        client.stage === stage)
    );
    document.querySelector('#reportStage').disabled = false;
    document.querySelector('#reportSource').disabled = false;
    document.querySelector('#reportExpenseCategory').disabled = true;
    currentReportRows = rows.map(client => [
      client.name,
      client.phone,
      client.email,
      clientYear(client),
      cruiseName(client.cruiseId),
      clientPartySize(client),
      client.roomType || 'Not decided',
      client.stage,
      client.source,
      client.bookingValue,
      paidFor(client.id),
      client.stage === 'Booked' ? balanceFor(client) : 0,
      client.paymentDue,
      client.notes,
      client.customerType
    ]);
    currentReportRows.headers = ['Client','Phone','Email','Year','Cruise','Group size','Room type','Stage','Source','Booking value','Received','Balance','Payment deadline','Client notes','Customer type'];
    document.querySelector('#reportTitle').textContent = stage === 'returning'
      ? 'Returning customer report'
      : stage === 'paid-full'
        ? 'Paid-in-full client report'
        : 'Client report';
    document.querySelector('#reportSubtitle').textContent = stage === 'returning'
      ? 'Returning customers across all booking stages'
      : stage === 'paid-full'
        ? 'Clients whose recorded payments cover the booking price'
        : 'Enquiries, bookings, group sizes, rooms, payments and balances';
    document.querySelector('#reportHead').innerHTML = '<tr><th>Client</th><th>Year</th><th>Cruise</th><th>Group & room</th><th>Stage</th><th>Source</th><th class="number">Booking</th><th class="number">Received</th><th class="number">Balance</th></tr>';
    document.querySelector('#reportBody').innerHTML = rows.map(client => {
      const size = clientPartySize(client);
      const stay = appLanguage === 'he'
        ? `${size === 1 ? 'אדם אחד' : `${size} אנשים`} · ${translatedText(client.roomType || 'Not decided')}`
        : `${size} ${size === 1 ? 'person' : 'people'} · ${translatedText(client.roomType || 'Not decided')}`;
      return `<tr>${dataCell('Client',`<strong>${esc(client.name)}</strong><div class="subtext">${esc(client.phone || client.email || 'No contact')}${client.customerType === 'Returning customer' ? ` · ${translatedText('Returning customer')}` : ''}</div>`)}${dataCell('Year',clientYear(client))}${dataCell('Cruise',esc(cruiseName(client.cruiseId)))}${dataCell('Group & room',esc(stay))}${dataCell('Stage',`<span class="status ${stageClass(client.stage)}">${isPaid(client) ? translatedText('Paid in full') : esc(translatedText(client.stage))}</span>`)}${dataCell('Source',esc(translatedText(client.source)))}${dataCell('Booking',euro(client.bookingValue),'number')}${dataCell('Received',euro(paidFor(client.id)),'number')}${dataCell('Balance',client.stage === 'Booked' ? euro(balanceFor(client)) : '—','number')}</tr>`;
    }).join('') || `<tr>${dataCell('Clients',empty('No matching clients.'))}</tr>`;
    const outstanding = rows.filter(client => client.stage === 'Booked').reduce((sum, client) => sum + balanceFor(client), 0);
    document.querySelector('#reportKpis').innerHTML = kpiCards([
      ['Clients',rows.length,'Matching filters'],
      ['Booking value',euro(rows.reduce((sum, client) => sum + Number(client.bookingValue || 0), 0)),'Potential and booked'],
      ['Money received',euro(rows.reduce((sum, client) => sum + paidFor(client.id), 0)),'Recorded transactions'],
      ['Outstanding',euro(outstanding),'Booked balances only']
    ]);
  }

  function renderRoomAllocationReport() {
    renderReportFilters();
    updateReportControlVisibility('rooms');
    const year = document.querySelector('#reportYear').value;
    document.querySelector('#reportStage').disabled = true;
    document.querySelector('#reportSource').disabled = true;
    document.querySelector('#reportExpenseCategory').disabled = true;
    const rows = state.cruises
      .filter(cruise => year === 'all' || cruise.startDate.startsWith(year))
      .sort((a, b) => a.startDate.localeCompare(b.startDate))
      .map(cruise => {
        const clients = state.clients.filter(client => Number(client.cruiseId) === Number(cruise.id) && client.stage === 'Booked');
        const count = roomType => clients.filter(client => (client.roomType || 'Not decided') === roomType).length;
        return {
          cruise,
          places:clients.reduce((sum, client) => sum + clientPartySize(client), 0),
          single:count('Single room'),
          smallDouble:count('Small double room'),
          largeDouble:count('Large double room'),
          undecided:count('Not decided')
        };
      });
    currentReportRows = rows.map(row => [
      row.cruise.name,
      row.cruise.startDate,
      row.cruise.capacity,
      row.places,
      row.single,
      row.smallDouble,
      row.largeDouble,
      row.undecided
    ]);
    currentReportRows.headers = ['Cruise','Start date','Capacity','Places booked','Single rooms','Small double rooms','Large double rooms','Rooms not decided'];
    document.querySelector('#reportTitle').textContent = 'Room allocation report';
    document.querySelector('#reportSubtitle').textContent = 'Booked places and room requirements for every cruise';
    document.querySelector('#reportHead').innerHTML = '<tr><th>Cruise</th><th>Date</th><th class="number">Places booked</th><th class="number">Single rooms</th><th class="number">Small double rooms</th><th class="number">Large double rooms</th><th class="number">Rooms not decided</th></tr>';
    document.querySelector('#reportBody').innerHTML = rows.map(row => `<tr>${dataCell('Cruise',`<strong>${esc(row.cruise.name)}</strong><div class="subtext">${row.places}/${row.cruise.capacity} ${translatedText('places booked')}</div>`)}${dataCell('Date',formatDate(row.cruise.startDate))}${dataCell('Places booked',row.places,'number')}${dataCell('Single rooms',row.single,'number')}${dataCell('Small double rooms',row.smallDouble,'number')}${dataCell('Large double rooms',row.largeDouble,'number')}${dataCell('Rooms not decided',row.undecided,`number ${row.undecided ? 'overdue' : ''}`)}</tr>`).join('') || `<tr>${dataCell('Cruises',empty('No cruises for this year.'))}</tr>`;
    document.querySelector('#reportKpis').innerHTML = kpiCards([
      ['Places booked',rows.reduce((sum, row) => sum + row.places, 0),'Confirmed group sizes'],
      ['Single rooms',rows.reduce((sum, row) => sum + row.single, 0),'Confirmed room choices'],
      ['Double rooms',rows.reduce((sum, row) => sum + row.smallDouble + row.largeDouble, 0),'Small and large double rooms'],
      ['Rooms not decided',rows.reduce((sum, row) => sum + row.undecided, 0),'Require attention']
    ]);
  }

  renderReports = function() {
    const type = document.querySelector('#reportType').value;
    if (type === 'clients') {
      renderClientReportEnhanced();
      return;
    }
    if (type === 'rooms') {
      renderRoomAllocationReport();
      return;
    }
    baseRenderReportsCustomerType();
  };

  function prepareSupplierQuote(quoteId) {
    const form = document.querySelector('#supplierQuoteForm');
    resetForm(form);
    form.elements.quoteDate.value = TODAY;
    form.elements.validUntil.value = addDays(TODAY, 7);
    form.elements.status.value = 'Received';
    const quote = state.supplierQuotes.find(item => Number(item.id) === Number(quoteId));
    if (quote) setForm(form, quote);
    document.querySelector('#supplierQuoteModalTitle').textContent = quote ? 'Edit supplier quote' : 'Add supplier quote';
    openModal('supplierQuoteModal');
  }

  function nextQuoteNumber() {
    const year = yearOf(TODAY);
    const next = state.clientQuotes.filter(quote => String(quote.quoteNumber || '').includes(year)).length + 1;
    return `SC-${year}-${String(next).padStart(3, '0')}`;
  }

  function fillClientQuoteSelect(selectedClientId) {
    const select = document.querySelector('#clientQuoteClientSelect');
    select.innerHTML = state.clients.filter(client => client.stage !== 'Cancelled').sort((a, b) => a.name.localeCompare(b.name)).map(client => `<option value="${client.id}">${esc(client.name)} · ${esc(client.customerType)}</option>`).join('');
    if (selectedClientId && state.clients.some(client => Number(client.id) === Number(selectedClientId))) select.value = String(selectedClientId);
  }

  function prepareClientQuote(quoteId, clientId) {
    const form = document.querySelector('#clientQuoteForm');
    resetForm(form);
    const quote = state.clientQuotes.find(item => Number(item.id) === Number(quoteId));
    const selectedClient = clientBy(clientId || quote?.clientId);
    fillClientQuoteSelect(selectedClient?.id);
    form.elements.quoteNumber.value = nextQuoteNumber();
    form.elements.quoteDate.value = TODAY;
    form.elements.validUntil.value = addDays(TODAY, 7);
    form.elements.status.value = 'Draft';
    if (selectedClient) {
      form.elements.clientId.value = String(selectedClient.id);
      form.elements.cruiseId.value = selectedClient.cruiseId ? String(selectedClient.cruiseId) : '';
      form.elements.amount.value = Number(selectedClient.bookingValue || 0) || '';
    }
    if (quote) setForm(form, quote);
    document.querySelector('#clientQuoteModalTitle').textContent = quote ? 'Edit client quote' : 'Create client quote';
    openModal('clientQuoteModal');
  }

  function updateInvoicePartyFields() {
    const form = document.querySelector('#invoiceForm');
    const isClient = form.elements.partyType.value === 'Client';
    document.querySelector('#invoiceClientField').hidden = !isClient;
    document.querySelector('#invoiceSupplierField').hidden = isClient;
    form.elements.clientId.required = isClient;
    form.elements.supplierName.required = !isClient;
  }

  function fillInvoiceClientSelect(selectedClientId) {
    const select = document.querySelector('#invoiceClientSelect');
    select.innerHTML = state.clients.filter(client => client.stage !== 'Cancelled').sort((a, b) => a.name.localeCompare(b.name)).map(client => `<option value="${client.id}">${esc(client.name)}</option>`).join('');
    if (selectedClientId && state.clients.some(client => Number(client.id) === Number(selectedClientId))) select.value = String(selectedClientId);
  }

  function prepareInvoice(invoiceId, partyType = 'Client', clientId = null, supplierName = '') {
    const form = document.querySelector('#invoiceForm');
    resetForm(form);
    const invoice = state.invoices.find(item => Number(item.id) === Number(invoiceId));
    fillInvoiceClientSelect(clientId || invoice?.clientId);
    form.elements.partyType.value = invoice?.partyType || partyType;
    form.elements.issueDate.value = TODAY;
    form.elements.dueDate.value = addDays(TODAY, 14);
    form.elements.status.value = 'Open';
    if (clientId) {
      const client = clientBy(clientId);
      form.elements.clientId.value = String(clientId);
      form.elements.cruiseId.value = client?.cruiseId ? String(client.cruiseId) : '';
      form.elements.amount.value = Number(client?.bookingValue || 0) || '';
    }
    if (partyType === 'Supplier' && supplierName) form.elements.supplierName.value = supplierName;
    if (invoice) setForm(form, invoice);
    updateInvoicePartyFields();
    document.querySelector('#invoiceModalTitle').textContent = invoice ? 'Edit invoice' : 'Add invoice';
    openModal('invoiceModal');
  }

  function clientQuoteText(quote) {
    const client = clientBy(quote.clientId);
    const cruise = cruiseBy(quote.cruiseId);
    const cruiseLine = cruise
      ? `${cruise.name} · ${formatDate(cruise.startDate)} – ${formatDate(cruise.endDate)}`
      : (appLanguage === 'he' ? 'SUP Cruise ביוון' : 'SUP Cruise in Greece');
    if (appLanguage === 'he') {
      return [
        `הצעת מחיר SUP CRUISE ${quote.quoteNumber}`,
        '',
        `שלום ${client?.name || ''},`,
        '',
        `תודה על ההתעניינות ב-${cruiseLine}.`,
        `סכום ההצעה: ${euro(quote.amount)}`,
        `בתוקף עד: ${formatDate(quote.validUntil)}`,
        '',
        'ההצעה כוללת:',
        quote.includes || 'פרטי ההפלגה שסוכמו.',
        quote.notes ? `\n${quote.notes}` : '',
        '',
        'נשמח לארח אותך אצלנו!',
        'הדר · SUP Cruise'
      ].filter(line => line !== '').join('\n');
    }
    return [
      `SUP CRUISE QUOTATION ${quote.quoteNumber}`,
      '',
      `Hello ${client?.name || ''},`,
      '',
      `Thank you for your interest in ${cruiseLine}.`,
      `Offer: ${euro(quote.amount)}`,
      `Valid until: ${formatDate(quote.validUntil)}`,
      '',
      'Included:',
      quote.includes || 'Please see the agreed cruise details.',
      quote.notes ? `\n${quote.notes}` : '',
      '',
      'We would be happy to welcome you aboard!',
      'Hadar · SUP Cruise'
    ].filter(line => line !== '').join('\n');
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = document.createElement('textarea');
      area.value = text;
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      area.remove();
    }
  }

  async function copyClientQuote(quoteId) {
    const quote = state.clientQuotes.find(item => Number(item.id) === Number(quoteId));
    if (!quote) return;
    await copyText(clientQuoteText(quote));
    showToast('Quote copied. Paste it into WhatsApp or email.');
  }

  function emailClientQuote(quoteId) {
    const quote = state.clientQuotes.find(item => Number(item.id) === Number(quoteId));
    const client = clientBy(quote?.clientId);
    if (!quote || !client?.email) return;
    quote.status = 'Sent';
    render();
    const subject = encodeURIComponent(appLanguage === 'he'
      ? `הצעת מחיר SUP Cruise ${quote.quoteNumber}`
      : `SUP Cruise quotation ${quote.quoteNumber}`);
    const body = encodeURIComponent(clientQuoteText(quote));
    window.location.href = `mailto:${encodeURIComponent(client.email)}?subject=${subject}&body=${body}`;
  }

  function whatsAppClientQuote(quoteId) {
    const quote = state.clientQuotes.find(item => Number(item.id) === Number(quoteId));
    const client = clientBy(quote?.clientId);
    if (!quote || !client) return;
    const phone = String(client.phone || '').trim();
    const internationalNumber = phone.startsWith('+') ? phone.replace(/\D/g, '') : '';
    const target = internationalNumber ? `https://wa.me/${internationalNumber}` : 'https://wa.me/';
    quote.status = 'Sent';
    window.open(`${target}?text=${encodeURIComponent(clientQuoteText(quote))}`, '_blank', 'noopener');
    render();
  }

  function selectSupplierQuote(quoteId) {
    const quote = state.supplierQuotes.find(item => Number(item.id) === Number(quoteId));
    if (!quote) return;
    state.supplierQuotes.forEach(item => {
      if (Number(item.cruiseId) === Number(quote.cruiseId) && item.service === quote.service && Number(item.id) !== Number(quote.id) && item.status === 'Selected') item.status = 'Shortlisted';
    });
    quote.status = 'Selected';
    render();
    showToast('Supplier quote selected');
  }

  function expenseCategoryForQuote(service) {
    return {
      'Catamaran company':'Catamaran charter',
      'Skipper':'Skipper salary',
      'Cook':'Cook salary',
      'Driver':'Driver / transport'
    }[service] || 'Other';
  }

  function createExpenseFromQuote(quoteId) {
    const quote = state.supplierQuotes.find(item => Number(item.id) === Number(quoteId));
    if (!quote || quote.expenseId) return;
    if (!askConfirm('Create an unpaid expense from this selected quote?')) return;
    const contact = state.people.find(person => person.name.trim().toLowerCase() === quote.providerName.trim().toLowerCase());
    const expense = {
      id:id(),
      date:TODAY,
      dueDate:addDays(TODAY, 7),
      paidDate:'',
      cruiseId:quote.cruiseId,
      category:expenseCategoryForQuote(quote.service),
      payee:quote.providerName,
      payeePersonId:contact?.id || null,
      amount:Number(quote.amount || 0),
      status:'Still to pay',
      reference:`Selected quote ${formatDate(quote.quoteDate)}`,
      notes:quote.terms || quote.notes || '',
      managedBy:'supplierQuote',
      quoteId:quote.id
    };
    state.expenses.unshift(expense);
    quote.expenseId = expense.id;
    render();
    showToast('Expense created from selected supplier quote');
  }

  function passengerDetailsComplete(passenger) {
    return Boolean(passenger.dob && passenger.gender && passenger.passport);
  }

  function passengerMeta(passenger) {
    const details = [
      `${translatedText('Date of birth')}: ${passenger.dob ? formatDate(passenger.dob) : '—'}`,
      `${translatedText('Gender')}: ${passenger.gender ? translatedText(passenger.gender) : '—'}`,
      `${translatedText('Passport number')}: ${passenger.passport || '—'}`
    ];
    return details.map(esc).join(' · ');
  }

  function cruiseReportRows(cruiseId) {
    const passengerRows = passengersForCruise(cruiseId).map(passenger => {
      const client = clientBy(passenger.clientId);
      return [
        translatedText('Passenger'),
        passenger.name,
        passenger.dob || '',
        translatedText(passenger.gender || ''),
        passenger.passport || '',
        passenger.isPrimary ? translatedText('Primary passenger') : translatedText(passenger.relationship || 'Passenger'),
        client?.name || ''
      ];
    });
    const crewRows = crewForCruise(cruiseId).map(person => [
      translatedText('Crew'),
      person.name,
      person.dob || '',
      translatedText(person.gender || ''),
      person.passport || '',
      translatedText(person.role || 'Crew member'),
      ''
    ]);
    return [...passengerRows, ...crewRows];
  }

  function cruiseReportHeaders() {
    return [
      translatedText('Type'),
      translatedText('Full name'),
      translatedText('Date of birth'),
      translatedText('Gender'),
      translatedText('Passport number'),
      translatedText('Role / booking'),
      translatedText('Booking client')
    ];
  }

  function cruiseReportFilename(cruise) {
    const safeName = String(cruise.name || 'cruise').trim().replace(/[^\p{L}\p{N}-]+/gu, '-').replace(/^-+|-+$/g, '') || 'cruise';
    return `supcruise-${safeName}-${cruise.startDate || TODAY}-passengers-crew.csv`;
  }

  function downloadCruiseReport(cruiseId) {
    const cruise = cruiseBy(cruiseId), rows = cruiseReportRows(cruiseId);
    if (!cruise || !rows.length) {
      showToast('No passengers or crew are assigned to this cruise.');
      return;
    }
    const csv = [cruiseReportHeaders(), ...rows].map(row => row.map(csvEscape).join(',')).join('\n');
    downloadBlob(new Blob(['\ufeff' + csv], {type:'text/csv;charset=utf-8'}), cruiseReportFilename(cruise));
  }

  async function copyCruiseReport(cruiseId) {
    const cruise = cruiseBy(cruiseId), rows = cruiseReportRows(cruiseId);
    if (!cruise || !rows.length) {
      showToast('No passengers or crew are assigned to this cruise.');
      return;
    }
    const separator = appLanguage === 'he' ? ' | ' : ' | ';
    const text = [
      `${cruise.name} · ${formatDate(cruise.startDate)} – ${formatDate(cruise.endDate)}`,
      translatedText('Passengers and crew'),
      cruiseReportHeaders().join(separator),
      ...rows.map(row => row.join(separator))
    ].join('\n');
    await copyText(text);
    showToast('Cruise report copied');
  }

  function prepareClientDetail(clientId) {
    const client = clientBy(clientId);
    if (!client) return;
    if (client.stage === 'Booked') ensurePrimaryPassenger(client);
    currentClientDetailId = client.id;
    const quotes = state.clientQuotes.filter(quote => Number(quote.clientId) === Number(client.id));
    const invoices = state.invoices.filter(invoice => invoice.partyType === 'Client' && Number(invoice.clientId) === Number(client.id));
    const payments = state.payments.filter(payment => Number(payment.clientId) === Number(client.id)).sort((a, b) => b.date.localeCompare(a.date));
    const passengers = passengersForClient(client.id);
    const partySize = clientPartySize(client);
    const completePassengers = passengers.filter(passengerDetailsComplete).length;
    const googleFormUrl = safeWebUrl(client.googleFormUrl);
    document.querySelector('#clientDetailTitle').textContent = client.name;
    document.querySelector('#clientDetailBody').innerHTML = `
      <div class="detail-hero">
        <div class="detail-identity"><span class="avatar">${initials(client.name)}</span><div><h3>${esc(client.name)}</h3><div class="detail-badges"><span class="booking-client-badge">${translatedText('Client')}</span><span class="booking-client-badge">${appLanguage === 'he' ? 'מספר אנשים' : 'Group size'}: ${clientPartySize(client)}</span><span class="booking-client-badge">${esc(translatedText(client.roomType || 'Not decided'))}</span><span class="status ${stageClass(client.stage)}">${esc(translatedText(client.stage))}</span>${client.customerType === 'Returning customer' ? '<span class="returning-badge">Returning customer</span>' : ''}</div><div class="subtext">${esc(client.phone || '—')} · ${esc(client.email || '—')}</div></div></div>
        <div><strong>${esc(cruiseName(client.cruiseId))}</strong><div class="subtext">${esc(client.source || '—')}</div></div>
      </div>
      <div class="detail-kpis"><div class="detail-kpi"><span>Total booking price</span><strong>${euro(client.bookingValue)}</strong></div><div class="detail-kpi"><span>Money received</span><strong>${euro(paidFor(client.id))}</strong></div><div class="detail-kpi"><span>Balance</span><strong>${euro(balanceFor(client))}</strong></div></div>
      <div class="detail-section"><h3>Client notes</h3><div class="entity-row"><div class="entity-row-main"><strong>${esc(client.notes || 'No client notes')}</strong><span>${client.stage === 'Booked' ? `Payment: ${formatDate(client.paymentDue)}` : `Follow-up: ${formatDate(client.followup)}`}</span></div></div></div>
      ${client.stage === 'Booked' ? `<div class="detail-section passenger-section"><div class="detail-section-head"><div><h3>Passengers in this booking</h3><p>The booked client is the primary passenger. Add everyone else travelling under the same booking.</p></div>${passengers.length < partySize ? `<button class="btn secondary compact" data-add-passenger-for-client="${client.id}">＋ Add passenger</button>` : ''}</div><div class="passenger-progress"><span><strong>${passengers.length}</strong> ${translatedText('Entered passengers')}</span><span><strong>${partySize}</strong> ${translatedText('Expected from booking')}</span><span class="${completePassengers === passengers.length ? 'complete' : 'incomplete'}"><strong>${completePassengers}/${passengers.length}</strong> ${translatedText('Complete passenger details')}</span></div><div class="entity-list">${passengers.map(passenger => `<div class="entity-row passenger-row"><div class="entity-row-main"><strong>${esc(passenger.name)}${passenger.isPrimary ? `<span class="primary-passenger-badge">${translatedText('Primary passenger')}</span>` : ''}</strong><span>${passengerMeta(passenger)}</span><span class="passenger-readiness ${passengerDetailsComplete(passenger) ? 'complete' : 'incomplete'}">${translatedText(passengerDetailsComplete(passenger) ? 'Passenger details complete' : 'Missing travel details')}</span></div><div class="entity-row-actions"><button class="icon-action" data-edit-passenger="${passenger.id}">Edit</button>${passenger.isPrimary ? '' : `<button class="icon-action danger" data-delete-passenger="${passenger.id}">Delete</button>`}</div></div>`).join('') || empty('No travellers in this booking yet.')}</div><div class="sensitive-inline-note">${translatedText('Sensitive passenger information is stored only in this browser in the prototype. Share this report only with authorised people.')}</div></div>` : ''}
      <div class="detail-section"><h3>Google Form response</h3><div class="entity-row google-form-row"><div class="entity-row-main"><strong>${googleFormUrl ? 'Linked to this client' : 'No Google Form response linked'}</strong><span>Keep the individual response link with the client record.</span></div><div class="entity-row-actions">${googleFormUrl ? `<a class="icon-action" href="${esc(googleFormUrl)}" target="_blank" rel="noopener">Open linked response ↗</a><button class="icon-action danger" data-clear-google-form="${client.id}">Remove link</button>` : ''}<button class="icon-action" data-edit-client="${client.id}">Link / change form</button></div></div></div>
      <div class="detail-section"><div class="detail-section-head"><div><h3>Client quotes</h3><p>Create and send the offer from this client card. Passenger records do not contain quote actions.</p></div></div><div class="entity-list">${quotes.map(quote => `<div class="entity-row"><div class="entity-row-main"><strong>${esc(quote.quoteNumber)} · ${euro(quote.amount)}</strong><span>${formatDate(quote.quoteDate)} · ${esc(translatedText(quote.status))}</span></div><div class="entity-row-actions"><button class="icon-action" data-whatsapp-client-quote="${quote.id}">Send via WhatsApp</button>${client.email ? `<button class="icon-action" data-email-client-quote="${quote.id}">Send by email</button>` : ''}<button class="icon-action" data-edit-client-quote="${quote.id}">Edit</button><button class="icon-action danger" data-delete-client-quote="${quote.id}">Delete</button></div></div>`).join('') || empty('No client quotes yet.')}</div></div>
      <div class="detail-section"><h3>Invoices</h3><div class="entity-list">${invoices.map(invoice => `<div class="entity-row"><div class="entity-row-main"><strong>${esc(invoice.invoiceNumber)} · ${euro(invoice.amount)}</strong><span>${formatDate(invoice.issueDate)} · ${esc(translatedText(invoice.status))}</span></div><div class="entity-row-actions"><button class="icon-action" data-edit-invoice="${invoice.id}">Edit</button><button class="icon-action danger" data-delete-invoice="${invoice.id}">Delete</button>${invoice.attachmentName ? `<button class="icon-action" data-download-document="invoice:${invoice.id}" data-document-name="${esc(invoice.attachmentName)}">Download file</button>` : ''}</div></div>`).join('') || empty('No invoices yet.')}</div></div>
      <div class="detail-section"><h3>Payment history</h3><div class="entity-list">${payments.map(payment => { const cancelled = payment.status === 'Cancelled'; return `<div class="entity-row ${cancelled ? 'cancelled-payment-row' : ''}"><div class="entity-row-main"><strong>${formatDate(payment.date)} · ${money(payment.amount,payment.currency)}</strong><span>${esc(payment.method)} · ${translatedText(cancelled ? 'Cancelled' : 'Received')}${payment.reference ? ` · ${esc(payment.reference)}` : ''}${payment.currency !== 'EUR' ? ` · ${euro(paymentEurValue(payment))} ${translatedText('for balance')}` : ''}</span></div><div class="entity-row-actions">${cancelled ? `<button type="button" class="icon-action" data-restore-payment="${payment.id}">Restore</button>` : `<button type="button" class="icon-action" data-edit-payment="${payment.id}">Edit</button><button type="button" class="icon-action danger" data-cancel-payment="${payment.id}">Cancel payment</button>`}</div></div>`; }).join('') || empty('No payments match this search.')}</div></div>
    `;
    document.querySelector('#clientDetailActions').innerHTML = `<button class="btn secondary" data-edit-client="${client.id}">Edit client</button>${client.stage === 'Booked' && balanceFor(client) ? `<button class="btn secondary" data-pay-client="${client.id}">Record client payment</button>` : ''}<button class="btn primary" data-create-client-quote="${client.id}">Create client quote</button><button class="btn secondary" data-create-client-invoice="${client.id}">Add client invoice</button><button class="btn secondary danger" data-delete-client="${client.id}">Delete</button>`;
    openModal('clientDetailModal');
    applyLanguage();
  }

  function prepareCruiseDetail(cruiseId) {
    const cruise = cruiseBy(cruiseId);
    if (!cruise) return;
    currentCruiseDetailId = cruise.id;
    const clients = state.clients.filter(client => Number(client.cruiseId) === Number(cruise.id) && client.stage !== 'Cancelled');
    const confirmedClients = clients.filter(client => client.stage === 'Booked');
    confirmedClients.forEach(client => ensurePrimaryPassenger(client));
    const enquiryClients = clients.filter(client => client.stage !== 'Booked');
    const confirmedClientCount = confirmedClients.reduce((sum, client) => sum + clientPartySize(client), 0);
    const roomCount = roomType => confirmedClients.filter(client => (client.roomType || 'Not decided') === roomType).length;
    const roomSummary = {
      single:roomCount('Single room'),
      smallDouble:roomCount('Small double room'),
      largeDouble:roomCount('Large double room'),
      undecided:roomCount('Not decided')
    };
    const clientRows = rows => rows.map(client => `<div class="entity-row"><div class="entity-row-main"><strong>${esc(client.name)}${client.customerType === 'Returning customer' ? '<span class="returning-badge">Returning customer</span>' : ''}</strong><span>${appLanguage === 'he' ? 'מספר אנשים' : 'Group size'}: ${clientPartySize(client)} · ${appLanguage === 'he' ? 'חדר' : 'Room'}: ${esc(translatedText(client.roomType || 'Not decided'))} · ${esc(translatedText(client.stage))} · ${euro(paidFor(client.id))} / ${euro(client.bookingValue)}</span></div><button class="icon-action" data-open-client="${client.id}">Open client</button></div>`).join('');
    const passengers = passengersForCruise(cruise.id);
    const crew = crewForCruise(cruise.id);
    const selectedQuotes = state.supplierQuotes.filter(quote => Number(quote.cruiseId) === Number(cruise.id) && quote.status === 'Selected');
    const revenue = bookedFor(cruise.id);
    const expenses = expenseFor(cruise.id);
    const relatedExpenses = state.expenses.filter(expense => Number(expense.cruiseId) === Number(cruise.id)).sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
    document.querySelector('#cruiseDetailTitle').textContent = `${cruise.name} · ${formatDate(cruise.startDate)}`;
    document.querySelector('#cruiseDetailBody').innerHTML = `
      <div class="detail-hero cruise-detail-hero"><img class="cruise-detail-yacht" data-supcruise-image="yacht" src="assets/yacht-icon.png?v=20260812" alt="" aria-hidden="true" draggable="false"><div class="cruise-detail-heading"><h3>${esc(cruise.name)}</h3><div class="subtext">${formatDate(cruise.startDate)} – ${formatDate(cruise.endDate)} · ${confirmedClientCount}/${cruise.capacity} ${appLanguage === 'he' ? 'מקומות תפוסים' : 'places booked'}</div></div><span class="status booked">${euro(revenue - expenses)} · ${translatedText('Estimated profit')}</span></div>
      <div class="detail-kpis"><div class="detail-kpi"><span>Booked revenue</span><strong>${euro(revenue)}</strong></div><div class="detail-kpi"><span>Money received</span><strong>${euro(receivedForCruise(cruise.id))}</strong></div><div class="detail-kpi"><span>Expenses</span><strong>${euro(expenses)}</strong></div></div>
      <div class="room-allocation-strip">
        <div class="room-allocation-chip"><span>Single rooms</span><strong>${roomSummary.single}</strong></div>
        <div class="room-allocation-chip"><span>Small double rooms</span><strong>${roomSummary.smallDouble}</strong></div>
        <div class="room-allocation-chip"><span>Large double rooms</span><strong>${roomSummary.largeDouble}</strong></div>
        <div class="room-allocation-chip ${roomSummary.undecided ? 'needs-room' : ''}"><span>Rooms not decided</span><strong>${roomSummary.undecided}</strong></div>
      </div>
      <div class="detail-section"><div class="detail-section-head"><div><h3>Confirmed bookings</h3><p>These group sizes use the cruise capacity.</p></div></div><div class="entity-list">${clientRows(confirmedClients) || empty('No confirmed bookings.')}</div></div>
      ${enquiryClients.length ? `<div class="detail-section enquiry-client-section"><div class="detail-section-head"><div><h3>Enquiries linked to this cruise</h3><p>These clients are interested but do not use capacity yet.</p></div></div><div class="entity-list">${clientRows(enquiryClients)}</div></div>` : ''}
      <div class="detail-section passenger-section"><div class="detail-section-head"><div><h3>Passenger list</h3><p>All booked passengers assigned to this cruise.</p></div><span class="booking-client-badge">${passengers.length}/${confirmedClientCount}</span></div><div class="entity-list">${passengers.map(passenger => { const bookingClient = clientBy(passenger.clientId); return `<div class="entity-row passenger-row"><div class="entity-row-main"><strong>${esc(passenger.name)}${passenger.isPrimary ? `<span class="primary-passenger-badge">${translatedText('Primary passenger')}</span>` : ''}</strong><span>${esc(bookingClient?.name || '—')} · ${passengerMeta(passenger)}</span><span class="passenger-readiness ${passengerDetailsComplete(passenger) ? 'complete' : 'incomplete'}">${translatedText(passengerDetailsComplete(passenger) ? 'Passenger details complete' : 'Missing travel details')}</span></div><div class="entity-row-actions"><button class="icon-action" data-edit-passenger="${passenger.id}">Edit</button>${passenger.isPrimary ? '' : `<button class="icon-action danger" data-delete-passenger="${passenger.id}">Delete</button>`}</div></div>`; }).join('') || empty('No travellers assigned.')}</div></div>
      <div class="detail-section"><h3>Crew</h3><div class="entity-list">${crew.map(person => `<div class="entity-row"><div class="entity-row-main"><strong>${esc(person.name)}</strong><span>${esc(translatedText(person.role))} · ${esc(person.phone || person.email || '—')}</span><span>${esc(translatedText('Date of birth'))}: ${esc(person.dob ? formatDate(person.dob) : '—')} · ${esc(translatedText('Gender'))}: ${esc(person.gender ? translatedText(person.gender) : '—')} · ${esc(translatedText('Passport number'))}: ${esc(person.passport || '—')}</span></div><div class="entity-row-actions"><button class="icon-action" data-edit-person="${person.id}">Edit</button><button class="icon-action danger" data-delete-person="${person.id}">Delete</button></div></div>`).join('') || empty('No crew assigned.')}</div></div>
      <div class="sensitive-inline-note cruise-report-note">${translatedText('Sensitive passenger information is stored only in this browser in the prototype. Share this report only with authorised people.')}</div>
      <div class="detail-section"><h3>Selected supplier quotes</h3><div class="entity-list">${selectedQuotes.map(quote => `<div class="entity-row"><div class="entity-row-main"><strong>${esc(translatedText(quote.service))} · ${esc(quote.providerName)}</strong><span>${euro(quote.amount)}${quote.expenseId ? ` · ${translatedText('Expense created')}` : ''}</span></div><div class="entity-row-actions"><button class="icon-action" data-edit-supplier-quote="${quote.id}">Edit</button><button class="icon-action danger" data-delete-supplier-quote="${quote.id}">Delete</button>${!quote.expenseId ? `<button class="icon-action" data-create-quote-expense="${quote.id}">Create expense</button>` : ''}</div></div>`).join('') || empty('No selected suppliers.')}</div></div>
    `;
    const detailBody = document.querySelector('#cruiseDetailBody');
    const detailSections = [...detailBody.querySelectorAll(':scope > .detail-section')];
    const sectionWithHeading = heading => detailSections.find(section => section.querySelector('h3')?.textContent.trim() === heading);
    const confirmedSection = sectionWithHeading('Confirmed bookings');
    const enquirySection = sectionWithHeading('Enquiries linked to this cruise');
    const passengerSection = detailBody.querySelector(':scope > .passenger-section');
    const crewSection = sectionWithHeading('Crew');
    const supplierSection = sectionWithHeading('Selected supplier quotes');
    const sensitiveNote = detailBody.querySelector(':scope > .sensitive-inline-note');
    const tabDefinitions = [['clients', 'Confirmed clients', confirmedClients.length], ['passengers', 'Passengers', passengers.length], ['crew', 'Crew & suppliers', crew.length + selectedQuotes.length], ['expenses', 'Cruise expenses', relatedExpenses.length]];
    const tabs = document.createElement('div');
    tabs.className = 'cruise-detail-tabs';
    tabs.setAttribute('role', 'tablist');
    tabs.setAttribute('aria-label', 'Cruise detail sections');
    tabDefinitions.forEach(([key, label, count], index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'cruise-detail-tab' + (index === 0 ? ' active' : '');
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
      button.setAttribute('aria-controls', 'cruise-detail-panel-' + key);
      button.dataset.cruiseDetailTab = key;
      button.append(document.createTextNode(label));
      const countBadge = document.createElement('span');
      countBadge.className = 'cruise-detail-tab-count';
      countBadge.textContent = String(count);
      button.append(countBadge);
      tabs.append(button);
    });
    const panels = document.createElement('div');
    panels.className = 'cruise-detail-panels';
    const panelMap = {};
    tabDefinitions.forEach(([key]) => {
      const panel = document.createElement('section');
      panel.className = 'cruise-detail-panel' + (key === 'clients' ? ' active' : '');
      panel.id = 'cruise-detail-panel-' + key;
      panel.dataset.cruiseDetailPanel = key;
      panel.setAttribute('role', 'tabpanel');
      panel.hidden = key !== 'clients';
      panelMap[key] = panel;
      panels.append(panel);
    });
    const expenseSection = document.createElement('div');
    expenseSection.className = 'detail-section cruise-expenses-section';
    const expenseHead = document.createElement('div');
    expenseHead.className = 'detail-section-head';
    const expenseHeadCopy = document.createElement('div');
    const expenseTitle = document.createElement('h3');
    expenseTitle.textContent = 'Cruise expenses';
    const expenseHelp = document.createElement('p');
    expenseHelp.textContent = 'Expenses linked to this cruise.';
    expenseHeadCopy.append(expenseTitle, expenseHelp);
    const addCruiseExpense = document.createElement('button');
    addCruiseExpense.type = 'button';
    addCruiseExpense.className = 'btn secondary compact';
    addCruiseExpense.dataset.addCruiseExpense = String(cruise.id);
    addCruiseExpense.textContent = '＋ Add expense to cruise';
    expenseHead.append(expenseHeadCopy, addCruiseExpense);
    const expenseList = document.createElement('div');
    expenseList.className = 'entity-list';
    if (!relatedExpenses.length) expenseList.innerHTML = empty('No expenses linked to this cruise.');
    relatedExpenses.forEach(expense => {
      const row = document.createElement('div');
      row.className = 'entity-row';
      const main = document.createElement('div');
      main.className = 'entity-row-main';
      const strong = document.createElement('strong');
      strong.textContent = translatedText(expense.category) + ' · ' + euro(expense.amount);
      const meta = document.createElement('span');
      const timing = expense.status === 'Paid' ? translatedText('Paid on') + ': ' + formatDate(expense.paidDate || expense.date) : translatedText('Due date') + ': ' + formatDate(expense.dueDate);
      meta.textContent = (expense.payee || '—') + ' · ' + translatedText(expense.status) + ' · ' + timing;
      main.append(strong, meta);
      const actions = document.createElement('div');
      actions.className = 'entity-row-actions';
      if (expense.managedBy === 'commission') {
        const partners = document.createElement('button');
        partners.type = 'button';
        partners.className = 'icon-action';
        partners.dataset.view = 'partners';
        partners.textContent = 'Open Partners';
        actions.append(partners);
      } else {
        const edit = document.createElement('button');
        edit.type = 'button';
        edit.className = 'icon-action';
        edit.dataset.editExpense = String(expense.id);
        edit.textContent = 'Edit';
        const remove = document.createElement('button');
        remove.type = 'button';
        remove.className = 'icon-action danger';
        remove.dataset.deleteExpense = String(expense.id);
        remove.textContent = 'Delete';
        actions.append(edit, remove);
      }
      row.append(main, actions);
      expenseList.append(row);
    });
    expenseSection.append(expenseHead, expenseList);
    if (confirmedSection) panelMap.clients.append(confirmedSection);
    if (enquirySection) panelMap.clients.append(enquirySection);
    if (passengerSection) panelMap.passengers.append(passengerSection);
    if (sensitiveNote) panelMap.passengers.append(sensitiveNote);
    if (crewSection) panelMap.crew.append(crewSection);
    if (supplierSection) panelMap.crew.append(supplierSection);
    panelMap.expenses.append(expenseSection);
    detailBody.append(tabs, panels);
    document.querySelector('#cruiseDetailActions').innerHTML = `<button class="btn primary" type="button" data-copy-cruise-report="${cruise.id}">Copy cruise report</button><button class="btn secondary" type="button" data-download-cruise-report="${cruise.id}">Download cruise report CSV</button><button class="btn secondary" type="button" data-edit-cruise="${cruise.id}">Edit cruise</button>${cruiseIsCancelled(cruise) ? `<span class="status cancelled">${translatedText('Cancelled cruise')}</span><button class="btn secondary danger" type="button" data-remove-cruise="${cruise.id}">Remove cruise</button>` : `<button class="btn secondary danger" type="button" data-cancel-cruise="${cruise.id}">Cancel cruise</button>`}`;
    openModal('cruiseDetailModal');
    applyLanguage();
  }

  function relatedPersonExpenses(person) {
    const name = String(person.name || '').trim().toLowerCase();
    return state.expenses
      .filter(expense => Number(expense.payeePersonId) === Number(person.id) || (!expense.payeePersonId && String(expense.payee || '').trim().toLowerCase() === name))
      .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
  }

  function relatedSupplierInvoices(person) {
    return state.invoices
      .filter(invoice => invoice.partyType === 'Supplier' && (Number(invoice.supplierPersonId) === Number(person.id) || invoice.supplierName === person.name))
      .sort((a, b) => String(b.issueDate || '').localeCompare(String(a.issueDate || '')));
  }

  function relatedSupplierQuotes(person) {
    const name = String(person.name || '').trim().toLowerCase();
    return state.supplierQuotes
      .filter(quote => String(quote.providerName || '').trim().toLowerCase() === name)
      .sort((a, b) => String(b.quoteDate || '').localeCompare(String(a.quoteDate || '')));
  }

  function preparePersonDetail(personId) {
    const person = state.people.find(item => Number(item.id) === Number(personId));
    if (!person) return;
    currentPersonDetailId = person.id;
    const expenses = relatedPersonExpenses(person);
    const invoices = person.type === 'Supplier' ? relatedSupplierInvoices(person) : [];
    const quotes = person.type === 'Supplier' ? relatedSupplierQuotes(person) : [];
    const assignedCruises = person.type === 'Crew'
      ? state.cruises.filter(cruise => (person.cruiseIds || []).some(id => Number(id) === Number(cruise.id))).sort((a, b) => a.startDate.localeCompare(b.startDate))
      : [];
    const totalExpenses = expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
    const stillToPay = expenses.filter(expense => expense.status !== 'Paid').reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
    const typeLabel = person.type === 'Crew' ? 'Crew member' : 'Supplier';
    document.querySelector('#personDetailTitle').textContent = person.name;
    document.querySelector('#personDetailBody').innerHTML = `
      <div class="detail-hero person-detail-hero">
        <div class="detail-identity">
          <span class="avatar person-detail-avatar">${initials(person.name)}</span>
          <div>
            <h3>${esc(person.name)}</h3>
            <div class="detail-badges"><span class="booking-client-badge">${translatedText(typeLabel)}</span><span class="status booked">${esc(translatedText(person.role || 'Not stated'))}</span></div>
            <div class="subtext">${esc([person.phone, person.email].filter(Boolean).join(' · ') || translatedText('No contact details'))}</div>
          </div>
        </div>
        <div class="person-detail-rate"><span>${translatedText('Agreed rate')}</span><strong>${esc(person.rate || translatedText('Rate not entered'))}</strong></div>
      </div>
      <div class="detail-kpis">
        <div class="detail-kpi"><span>${person.type === 'Crew' ? translatedText('Assigned cruises') : translatedText('Invoices')}</span><strong>${person.type === 'Crew' ? assignedCruises.length : invoices.length}</strong></div>
        <div class="detail-kpi"><span>Total recorded expenses</span><strong>${euro(totalExpenses)}</strong></div>
        <div class="detail-kpi"><span>Still to pay</span><strong class="${stillToPay ? 'negative' : ''}">${euro(stillToPay)}</strong></div>
      </div>
      ${person.type === 'Crew' ? `
        <div class="detail-section">
          <h3>Assigned cruises</h3>
          <div class="entity-list">${assignedCruises.map(cruise => `<div class="entity-row"><div class="entity-row-main"><strong>${esc(cruise.name)}</strong><span>${formatDate(cruise.startDate)} – ${formatDate(cruise.endDate)}</span></div><button class="icon-action" data-open-cruise="${cruise.id}">Open details</button></div>`).join('') || empty('No cruises assigned.')}</div>
        </div>
        <div class="detail-section">
          <h3>Crew details</h3>
          <div class="person-facts">
            <div><span>Date of birth</span><strong>${formatDate(person.dob)}</strong></div>
            <div><span>Passport number</span><strong>${esc(person.passport || translatedText('Missing'))}</strong></div>
            <div><span>Gender</span><strong>${esc(translatedText(person.gender || 'Missing'))}</strong></div>
          </div>
          <p class="sensitive-person-note">Sensitive information is stored only on this device in the prototype.</p>
        </div>` : `
        <div class="detail-section">
          <h3>Supplier invoices</h3>
        <div class="entity-list">${invoices.map(invoice => `<div class="entity-row"><div class="entity-row-main"><strong>${esc(invoice.invoiceNumber)} · ${euro(invoice.amount)}</strong><span>${formatDate(invoice.issueDate)} · ${esc(translatedText(invoice.status))}${invoice.dueDate ? ` · ${translatedText('Due date')}: ${formatDate(invoice.dueDate)}` : ''}</span></div><div class="entity-row-actions"><button class="icon-action" data-edit-invoice="${invoice.id}">Edit</button><button class="icon-action danger" data-delete-invoice="${invoice.id}">Delete</button>${invoice.attachmentName ? `<button class="icon-action" data-download-document="invoice:${invoice.id}" data-document-name="${esc(invoice.attachmentName)}">Download file</button>` : ''}</div></div>`).join('') || empty('No supplier invoices.')}</div>
        </div>
        <div class="detail-section">
          <h3>Supplier quote history</h3>
          <div class="entity-list">${quotes.map(quote => `<div class="entity-row"><div class="entity-row-main"><strong>${esc(translatedText(quote.service))} · ${euro(quote.amount)}</strong><span>${formatDate(quote.quoteDate)} · ${esc(translatedText(quote.status))} · ${esc(cruiseName(quote.cruiseId))}</span></div><div class="entity-row-actions"><button class="icon-action" data-edit-supplier-quote="${quote.id}">Edit</button><button class="icon-action danger" data-delete-supplier-quote="${quote.id}">Delete</button></div></div>`).join('') || empty('No supplier quotes.')}</div>
        </div>`}
      <div class="detail-section">
        <h3>Related expenses</h3>
        <div class="entity-list">${expenses.map(expense => `<div class="entity-row"><div class="entity-row-main"><strong>${esc(translatedText(expense.category))} · ${euro(expense.amount)}</strong><span>${formatDate(expense.date)} · ${esc(translatedText(expense.status))} · ${esc(cruiseName(expense.cruiseId))}</span></div><div class="entity-row-actions">${expense.managedBy === 'commission' ? `<button class="icon-action" data-view="partners">Open Partners</button>` : `<button class="icon-action" data-edit-expense="${expense.id}">Edit</button><button class="icon-action danger" data-delete-expense="${expense.id}">Delete</button>`}</div></div>`).join('') || empty('No related expenses.')}</div>
      </div>
    `;
    document.querySelector('#personDetailActions').innerHTML = `<button class="btn secondary" data-edit-person="${person.id}">Edit contact</button>${person.type === 'Supplier' ? `<button class="btn primary" data-create-supplier-invoice="${person.id}">＋ Invoice</button>` : ''}<button class="btn secondary danger" data-delete-person="${person.id}">Delete</button>`;
    openModal('personDetailModal');
    applyLanguage();
  }

  let currentClientDetailId = null;
  let currentCruiseDetailId = null;
  let currentPersonDetailId = null;
  const LAST_BACKUP_KEY = 'supcruise-last-backup-date';

  function currentWeekSunday() {
    const date = new Date(`${TODAY}T12:00:00`);
    date.setDate(date.getDate() - date.getDay());
    return localISO(date);
  }

  function weeklyBackupDueDate() {
    const sunday = currentWeekSunday();
    const lastBackup = localStorage.getItem(LAST_BACKUP_KEY) || '';
    return lastBackup < sunday ? sunday : '';
  }

  function updateLastBackupLabel() {
    const label = document.querySelector('#lastBackupLabel');
    if (!label) return;
    const lastBackup = localStorage.getItem(LAST_BACKUP_KEY);
    label.textContent = lastBackup
      ? (appLanguage === 'he' ? `גיבוי אחרון: ${formatDate(lastBackup)}` : `Last backup: ${formatDate(lastBackup)}`)
      : translatedText('Last backup: Not yet');
  }

  function collectReminders() {
    const horizon = addDays(TODAY, 14);
    const reminders = [];
    const add = item => {
      if (!item.date || item.date > horizon) return;
      reminders.push({...item, overdue:item.date < TODAY});
    };
    state.clients.filter(client => !['Booked', 'Cancelled'].includes(client.stage)).forEach(client => add({id:`client:${client.id}`,type:'Client follow-up',title:client.name,meta:client.notes || client.stage,date:client.followup,view:'clients',kind:'followup'}));
    const openInstallments = state.installments.filter(item => !item.paymentId);
    const scheduledClientIds = new Set(openInstallments.map(item => Number(item.clientId)));
    openInstallments.forEach(item => add({id:`installment:${item.id}`,type:'Client payment',title:clientBy(item.clientId)?.name || 'Deleted client',meta:`${money(item.amount,item.currency)} · ${item.notes || 'Scheduled payment'}`,date:item.dueDate,view:'finance',kind:'payment'}));
    bookedClients().filter(client => !scheduledClientIds.has(Number(client.id)) && balanceFor(client) > 0).forEach(client => add({id:`balance:${client.id}`,type:'Client payment',title:client.name,meta:`${euro(balanceFor(client))} · Final balance`,date:client.paymentDue,view:'finance',kind:'payment'}));
    bookedClients().filter(client => (client.roomType || 'Not decided') === 'Not decided').forEach(client => {
      const cruise = cruiseBy(client.cruiseId);
      if (!cruise || cruise.startDate < TODAY) return;
      add({
        id:`room:${client.id}`,
        type:'Room assignment',
        title:client.name,
        meta:`${cruise.name} · Choose a room type before the cruise.`,
        date:addDays(cruise.startDate, -14),
        view:'clients',
        clientId:client.id,
        kind:'task'
      });
    });
    state.expenses.filter(expense => expense.status !== 'Paid').forEach(expense => add({id:`expense:${expense.id}`,type:'Supplier payment',title:expense.payee,meta:`${euro(expense.amount)} · ${expense.category}`,date:expense.dueDate,view:'finance',kind:'payment'}));
    state.invoices.filter(invoice => invoice.status !== 'Paid' && invoice.status !== 'Cancelled').forEach(invoice => add({id:`invoice:${invoice.id}`,type:'Invoice payment',title:invoicePartyName(invoice),meta:`${invoice.invoiceNumber} · ${euro(invoice.amount)}`,date:invoice.dueDate,view:'finance',kind:'payment'}));
    state.exhibitions.forEach(exhibition => (exhibition.tasks || []).filter(task => !task.done).forEach(task => add({id:`exhibitionTask:${exhibition.id}:${task.id}`,type:'Exhibition task',title:task.title,meta:exhibition.name,date:task.dueDate,view:'marketing',kind:'task'})));
    state.marketingTasks.filter(task => !task.done).forEach(task => add({id:`contentTask:${task.id}`,type:'Content task',title:task.title,meta:task.channel,date:task.date,view:'marketing',kind:'task'}));
    state.events.forEach(event => add({id:`event:${event.id}`,type:event.type || 'Event',title:event.title,meta:event.location || event.notes,date:event.date,view:'calendar',kind:'task'}));
    return reminders.sort((a, b) => a.date.localeCompare(b.date));
  }

  function renderReminderRows(reminders, compact = false) {
    if (!reminders.length) return empty('No reminders for the next 14 days.');
    return reminders.map(item => compact
      ? `<div class="focus-item ${item.overdue ? 'overdue' : ''} ${esc(item.kind || '')}"><span class="focus-item-dot"></span><div><div class="focus-item-title">${esc(translatedText(item.title))}</div><div class="focus-item-meta">${esc(translatedText(item.type))} · ${esc(translatedText(item.meta || ''))}</div></div><span class="focus-item-date">${formatDate(item.date)}</span></div>`
      : `<div class="reminder-center-item ${item.overdue ? 'overdue' : ''} ${esc(item.kind || '')}"><span class="focus-item-dot"></span><div><div class="focus-item-title">${esc(translatedText(item.title))}</div><div class="focus-item-meta">${esc(translatedText(item.type))} · ${esc(translatedText(item.meta || ''))}</div><div class="focus-item-date">${item.overdue ? translatedText('Overdue') : formatDate(item.date)}</div></div>${item.kind === 'backup' ? '<button class="icon-action backup-now-action" data-backup-now>Back up now</button>' : `<button class="icon-action" data-reminder-view="${item.view}"${item.clientId ? ` data-reminder-client="${item.clientId}"` : ''}>Open details</button>`}</div>`
    ).join('');
  }

  function maybeSendComputerReminder(reminders) {
    if (!('Notification' in window) || Notification.permission !== 'granted' || !reminders.length) return;
    const key = `supcruise-notified-${TODAY}`;
    if (localStorage.getItem(key)) return;
    const overdue = reminders.filter(item => item.overdue).length;
    const title = appLanguage === 'he' ? 'תזכורות SUP Cruise' : 'SUP Cruise reminders';
    const body = appLanguage === 'he' ? `${reminders.length} פריטים דורשים טיפול${overdue ? `, מתוכם ${overdue} באיחור` : ''}.` : `${reminders.length} items need attention${overdue ? `, including ${overdue} overdue` : ''}.`;
    try {
      new Notification(title, {body});
      localStorage.setItem(key, '1');
    } catch {}
  }

  let reminderToastShown = false;
  function renderReminderCenter() {
    const reminders = collectReminders();
    updateLastBackupLabel();
    const badge = document.querySelector('#reminderBadge');
    badge.textContent = reminders.length;
    badge.hidden = reminders.length === 0;
    document.querySelector('#reminderButton').classList.toggle('has-items', reminders.length > 0);
    document.querySelector('#focusReminderCount').textContent = reminders.length;
    document.querySelector('#focusReminderList').innerHTML = renderReminderRows(reminders.slice(0, 6), true);
    document.querySelector('#reminderCenterList').innerHTML = renderReminderRows(reminders, false);
    const enableButton = document.querySelector('#enableNotificationsButton');
    if (!('Notification' in window)) {
      enableButton.disabled = true;
      enableButton.textContent = 'Computer notifications are not supported here';
    } else if (Notification.permission === 'granted') {
      enableButton.textContent = 'Computer notifications enabled';
      enableButton.disabled = true;
    }
    if (!reminderToastShown && reminders.length) {
      reminderToastShown = true;
      const overdue = reminders.filter(item => item.overdue).length;
      setTimeout(() => showToast(appLanguage === 'he' ? `${reminders.length} תזכורות דורשות טיפול${overdue ? ` · ${overdue} באיחור` : ''}` : `${reminders.length} reminders need attention${overdue ? ` · ${overdue} overdue` : ''}`), 350);
    }
    maybeSendComputerReminder(reminders);
  }

  const baseRenderDashboardEnhancement = renderDashboard;
  renderDashboard = function() {
    baseRenderDashboardEnhancement();
    const reminders = collectReminders();
    document.querySelector('#focusReminderCount').textContent = reminders.length;
    document.querySelector('#focusReminderList').innerHTML = renderReminderRows(reminders.slice(0, 6), true);
  };

  function calendarItems() {
    const items = [];
    state.cruises.forEach(cruise => items.push({kind:'cruise',id:String(cruise.id),date:cruise.startDate,title:cruise.name,meta:`${formatDate(cruise.startDate)} – ${formatDate(cruise.endDate)}`}));
    state.exhibitions.filter(exhibition => exhibition.status !== 'Cancelled').forEach(exhibition => items.push({kind:'exhibition',id:String(exhibition.id),date:exhibition.startDate,title:exhibition.name,meta:`${formatDate(exhibition.startDate)} – ${formatDate(exhibition.endDate)}`}));
    state.events.forEach(event => items.push({kind:'event',id:String(event.id),date:event.date,title:event.title,meta:[event.time,event.location].filter(Boolean).join(' · ')}));
    state.marketingTasks.filter(task => !task.done).forEach(task => items.push({kind:'task',id:`content:${task.id}`,date:task.date,title:task.title,meta:task.channel}));
    state.exhibitions.forEach(exhibition => (exhibition.tasks || []).filter(task => !task.done).forEach(task => items.push({kind:'task',id:`exhibition:${exhibition.id}:${task.id}`,date:task.dueDate,title:task.title,meta:exhibition.name})));
    state.installments.filter(item => !item.paymentId).forEach(item => items.push({kind:'payment',id:`installment:${item.id}`,date:item.dueDate,title:clientBy(item.clientId)?.name || 'Client payment',meta:money(item.amount,item.currency)}));
    state.expenses.filter(expense => expense.status !== 'Paid' && expense.dueDate).forEach(expense => items.push({kind:'payment',id:`expense:${expense.id}`,date:expense.dueDate,title:expense.payee,meta:`${expense.category} · ${euro(expense.amount)}`}));
    state.invoices.filter(invoice => !['Paid', 'Cancelled'].includes(invoice.status) && invoice.dueDate).forEach(invoice => items.push({kind:'payment',id:`invoice:${invoice.id}`,date:invoice.dueDate,title:invoicePartyName(invoice),meta:`${invoice.invoiceNumber} · ${euro(invoice.amount)}`}));
    return items.filter(item => item.date).sort((a, b) => a.date.localeCompare(b.date));
  }

  let calendarCursor = new Date(`${TODAY.slice(0, 7)}-01T12:00:00`);
  function renderCalendar() {
    const title = document.querySelector('#calendarMonthTitle');
    if (!title) return;
    const locale = appLanguage === 'he' ? 'he-IL' : 'en-GB';
    title.textContent = new Intl.DateTimeFormat(locale, {month:'long', year:'numeric'}).format(calendarCursor);
    const year = calendarCursor.getFullYear();
    const month = calendarCursor.getMonth();
    const first = new Date(year, month, 1, 12);
    const start = new Date(year, month, 1 - first.getDay(), 12);
    const weekdays = appLanguage === 'he' ? ['א׳','ב׳','ג׳','ד׳','ה׳','ו׳','ש׳'] : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const items = calendarItems();
    let html = weekdays.map(day => `<div class="calendar-weekday">${day}</div>`).join('');
    for (let index = 0; index < 42; index++) {
      const day = new Date(start);
      day.setDate(start.getDate() + index);
      const iso = localISO(day);
      const ranges = [
        ...state.cruises.filter(item => item.startDate).map(item => ({kind:'cruise', id:item.id, startDate:item.startDate, endDate:item.endDate || item.startDate, title:item.name, meta:`${formatDate(item.startDate)} – ${formatDate(item.endDate || item.startDate)}`})),
        ...state.exhibitions.filter(item => item.status !== 'Cancelled' && item.startDate).map(item => ({kind:'exhibition', id:item.id, startDate:item.startDate, endDate:item.endDate || item.startDate, title:item.name, meta:`${formatDate(item.startDate)} – ${formatDate(item.endDate || item.startDate)}`})),
        ...state.events.filter(item => item.date && item.endDate && item.endDate >= item.date).map(item => ({kind:'event', id:item.id, startDate:item.date, endDate:item.endDate, title:item.title, meta:item.meta || [item.time,item.location].filter(Boolean).join(' · ')}))
      ];
      const dayRanges = ranges.filter(range => range.startDate <= iso && range.endDate >= iso);
      const rangeMarkup = dayRanges.map(range => {
        const position = `${iso === range.startDate ? 'start' : ''} ${iso === range.endDate ? 'end' : ''}`.trim() || 'middle';
        return `<button class="calendar-range ${range.kind} ${position}" type="button" data-calendar-kind="${range.kind}" data-calendar-id="${esc(range.id)}" title="${esc(`${range.title} · ${formatDate(range.startDate)} – ${formatDate(range.endDate)}`)}"><span>${iso === range.startDate ? esc(range.title) : '&nbsp;'}</span></button>`;
      }).join('');
      const dayItems = items.filter(item => item.date === iso && !ranges.some(range => range.kind === item.kind && String(range.id) === String(item.id)));
      html += `<div class="calendar-day ${day.getMonth() !== month ? 'outside' : ''} ${iso === TODAY ? 'today' : ''}"><div class="calendar-day-number">${day.getDate()}</div>${rangeMarkup ? `<div class="calendar-day-ranges">${rangeMarkup}</div>` : ''}<div class="calendar-day-items">${dayItems.slice(0, 3).map(item => `<button class="calendar-chip ${item.kind}" type="button" data-calendar-kind="${item.kind}" data-calendar-id="${esc(item.id)}" title="${esc(item.meta || item.title)}">${esc(item.title)}</button>`).join('')}${dayItems.length > 3 ? `<span class="calendar-more">＋${dayItems.length - 3} ${translatedText('More')}</span>` : ''}</div></div>`;
    }
    document.querySelector('#calendarGrid').innerHTML = html;
    const monthStart = localISO(new Date(year, month, 1, 12));
    const monthEnd = localISO(new Date(year, month + 1, 0, 12));
    const agenda = items.filter(item => item.date >= monthStart && item.date <= monthEnd && item.date >= TODAY);
    document.querySelector('#calendarAgenda').innerHTML = agenda.map(item => `<div class="agenda-row"><span class="agenda-date">${formatDate(item.date)}</span><span class="agenda-dot ${item.kind}"></span><div class="agenda-main"><strong>${esc(item.title)}</strong><span>${esc(item.meta || '')}</span></div>${item.kind === 'event' ? `<div class="entity-row-actions"><button class="icon-action" data-edit-event="${item.id}">Edit</button><button class="icon-action danger" data-delete-event="${item.id}">Delete</button></div>` : `<button class="icon-action" data-calendar-kind="${item.kind}" data-calendar-id="${esc(item.id)}">Open details</button>`}</div>`).join('') || empty('No calendar items for this month.');
  }

  function prepareEvent(eventId, cruiseId) {
    const form = document.querySelector('#eventForm');
    resetForm(form);
    const event = state.events.find(item => Number(item.id) === Number(eventId));
    form.elements.date.value = cruiseBy(cruiseId)?.startDate || TODAY;
    form.elements.type.value = 'Event';
    if (cruiseId) {
      const cruise = cruiseBy(cruiseId);
      form.elements.title.value = `${cruise?.name || 'Cruise'} event`;
      form.elements.notes.value = cruise ? `Related to ${cruise.name} · ${formatDate(cruise.startDate)}` : '';
    }
    if (event) setForm(form, event);
    document.querySelector('#eventModalTitle').textContent = event ? 'Edit event' : 'Add event';
    openModal('eventModal');
  }

  function handleCalendarItem(kind, identifier) {
    if (kind === 'cruise') prepareCruiseDetail(Number(identifier));
    else if (kind === 'exhibition') switchView('marketing');
    else if (kind === 'event') prepareEvent(Number(identifier));
    else if (kind === 'task') switchView('marketing');
    else if (kind === 'payment') switchView('finance');
  }

  function prepareExhibitionTaskEnhanced(exhibitionId, taskId) {
    const exhibition = state.exhibitions.find(item => Number(item.id) === Number(exhibitionId));
    const task = exhibition?.tasks.find(item => Number(item.id) === Number(taskId));
    const form = document.querySelector('#exhibitionTaskForm');
    form.reset();
    form.elements.exhibitionId.value = exhibitionId;
    form.elements.taskId.value = task?.id || '';
    form.elements.dueDate.value = task?.dueDate || exhibition?.startDate || addDays(TODAY, 7);
    if (task) {
      form.elements.title.value = task.title;
      form.elements.owner.value = task.owner || '';
    }
    document.querySelector('#exhibitionTaskModalTitle').textContent = task ? 'Edit exhibition task' : 'Add exhibition task';
    document.querySelector('#exhibitionTaskHelp').textContent = 'The task will appear in reminders and the calendar.';
    document.querySelector('#exhibitionTaskExhibitionName').textContent = exhibition?.name || '—';
    openModal('exhibitionTaskModal');
    applyLanguage();
  }
  prepareExhibitionTask = prepareExhibitionTaskEnhanced;

  const baseSwitchViewEnhancement = switchView;
  switchView = function(view) {
    document.querySelectorAll('.view').forEach(element => element.classList.toggle('active', element.id === `${view}View`));
    document.querySelectorAll('.nav-item').forEach(button => button.classList.toggle('active', button.dataset.view === view));
    const titles = {
      dashboard:'Business overview',
      clients:'Clients',
      operations:'Cruises & clients',
      calendar:'Calendar',
      finance:'Finance',
      quotes:'Quotes',
      people:'Crew & suppliers',
      marketing:'Marketing performance',
      partners:'Partners & commissions',
      reports:'Reports & backup'
    };
    document.querySelector('#pageTitle').textContent = titles[view] || titles.dashboard;
    document.querySelector('#quickExpense').hidden = true;
    document.querySelector('#quickClient').hidden = true;
    document.querySelector('#sidebar').classList.remove('open');
    document.querySelector('#menuScrim').classList.remove('open');
    if (view === 'reports') renderReports();
    if (view === 'calendar') renderCalendar();
    if (view === 'quotes') activeFinancePanel = 'quotes';
    if (view === 'finance' && activeFinancePanel === 'quotes') activeFinancePanel = 'cash';
    if (view === 'finance' || view === 'quotes') renderFinancePanels();
    applyLanguage();
    window.scrollTo({top:0, behavior:'smooth'});
  };

  const baseRenderEnhancement = render;
  // Persist before drawing, and isolate each section, for the same reason as the base render:
  // a failure in one panel must never stop the user's change being saved and uploaded.
  render = function() {
    const failed = [];
    renderStep(failed, 'normalisation', normalizeEnhancementState);
    saveState();
    renderStep(failed, 'main sections', baseRenderEnhancement);
    renderStep(failed, 'finance panels', renderFinancePanels);
    renderStep(failed, 'calendar', renderCalendar);
    renderStep(failed, 'reminders', renderReminderCenter);
    renderStep(failed, 'open cards', () => {
      if (document.querySelector('#clientDetailModal').classList.contains('open') && clientBy(currentClientDetailId)) prepareClientDetail(currentClientDetailId);
      if (document.querySelector('#cruiseDetailModal').classList.contains('open') && cruiseBy(currentCruiseDetailId)) prepareCruiseDetail(currentCruiseDetailId);
      if (document.querySelector('#personDetailModal').classList.contains('open') && state.people.some(person => Number(person.id) === Number(currentPersonDetailId))) preparePersonDetail(currentPersonDetailId);
    });
    renderStep(failed, 'room matching', roomCompatibility);
    renderStep(failed, 'language', applyLanguage);
    if (failed.length) showToast(`Saved. Some sections could not be displayed: ${failed.join(', ')}`);
  };

  function enhancedBackup() {
    downloadBlob(new Blob([JSON.stringify({version:5, exportedAt:new Date().toISOString(), data:state}, null, 2)], {type:'application/json'}), `supcruise-backup-${TODAY}.json`);
    localStorage.setItem(LAST_BACKUP_KEY, TODAY);
    showToast('Backup downloaded');
    renderReminderCenter();
    applyLanguage();
  }
  document.querySelector('#backupButton').onclick = enhancedBackup;

  document.querySelector('#supplierQuoteForm').addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.target;
    const data = Object.fromEntries(new FormData(form));
    const existing = state.supplierQuotes.find(item => Number(item.id) === Number(data.id));
    const file = form.elements.attachment.files[0];
    delete data.attachment;
    data.id = existing?.id || id();
    data.cruiseId = Number(data.cruiseId);
    data.amount = Number(data.amount || 0);
    data.attachmentName = file?.name || existing?.attachmentName || '';
    data.expenseId = existing?.expenseId || null;
    if (data.status === 'Selected') {
      state.supplierQuotes.forEach(item => {
        if (Number(item.cruiseId) === Number(data.cruiseId) && item.service === data.service && Number(item.id) !== Number(data.id) && item.status === 'Selected') item.status = 'Shortlisted';
      });
    }
    existing ? Object.assign(existing, data) : state.supplierQuotes.unshift(data);
    if (file) await saveDocumentFile(`supplierQuote:${data.id}`, file);
    closeModal('supplierQuoteModal');
    render();
    showToast('Supplier quote saved');
  });

  document.querySelector('#clientQuoteForm').addEventListener('submit', event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const existing = state.clientQuotes.find(item => Number(item.id) === Number(data.id));
    data.id = existing?.id || id();
    data.clientId = Number(data.clientId);
    data.cruiseId = data.cruiseId ? Number(data.cruiseId) : null;
    data.amount = Number(data.amount || 0);
    existing ? Object.assign(existing, data) : state.clientQuotes.unshift(data);
    closeModal('clientQuoteModal');
    render();
    prepareClientDetail(data.clientId);
    showToast('Client quote saved. Choose email or WhatsApp from the client card.');
  });

  document.querySelector('#invoiceForm').addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.target;
    const data = Object.fromEntries(new FormData(form));
    const existing = state.invoices.find(item => Number(item.id) === Number(data.id));
    const file = form.elements.attachment.files[0];
    delete data.attachment;
    if (data.partyType === 'Client' && !data.clientId) return;
    if (data.partyType === 'Supplier' && !String(data.supplierName || '').trim()) return;
    const supplier = state.people.find(person => person.name.trim().toLowerCase() === String(data.supplierName || '').trim().toLowerCase());
    data.id = existing?.id || id();
    data.clientId = data.partyType === 'Client' ? Number(data.clientId) : null;
    data.supplierName = data.partyType === 'Supplier' ? String(data.supplierName || '').trim() : '';
    data.supplierPersonId = data.partyType === 'Supplier' ? supplier?.id || null : null;
    data.cruiseId = data.cruiseId ? Number(data.cruiseId) : null;
    data.amount = Number(data.amount || 0);
    data.attachmentName = file?.name || existing?.attachmentName || '';
    existing ? Object.assign(existing, data) : state.invoices.unshift(data);
    if (file) await saveDocumentFile(`invoice:${data.id}`, file);
    closeModal('invoiceModal');
    render();
    showToast('Invoice saved');
  });

  document.querySelector('#eventForm').addEventListener('submit', event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const existing = state.events.find(item => Number(item.id) === Number(data.id));
    if (data.endDate && data.endDate < data.date) {
      showToast('The event end date cannot be earlier than the start date.');
      return;
    }
    data.id = existing?.id || id();
    existing ? Object.assign(existing, data) : state.events.push(data);
    closeModal('eventModal');
    render();
    showToast('Event saved');
  });

  function normalizeOptionalUrl(event, fieldName) {
    const urlField = event.target.elements[fieldName];
    const enteredUrl = urlField?.value.trim() || '';
    if (!enteredUrl) return;
    const normalizedUrl = /^https?:\/\//i.test(enteredUrl) ? enteredUrl : `https://${enteredUrl}`;
    try {
      const parsedUrl = new URL(normalizedUrl);
      if (!['http:', 'https:'].includes(parsedUrl.protocol)) throw new Error('Unsupported website protocol');
      urlField.value = parsedUrl.href;
    } catch {
      event.preventDefault();
      event.stopImmediatePropagation();
      showToast('Enter a valid website address.');
      urlField.focus();
    }
  }

  document.querySelector('#exhibitionForm').addEventListener('submit', event => normalizeOptionalUrl(event, 'website'), true);
  document.querySelector('#clientForm').addEventListener('submit', event => normalizeOptionalUrl(event, 'googleFormUrl'), true);

  document.querySelector('#exhibitionTaskForm').addEventListener('submit', event => {
    const taskId = Number(event.target.elements.taskId.value);
    if (!taskId) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const exhibitionId = Number(event.target.elements.exhibitionId.value);
    const exhibition = state.exhibitions.find(item => Number(item.id) === exhibitionId);
    const task = exhibition?.tasks.find(item => Number(item.id) === taskId);
    if (!task) return;
    task.title = event.target.elements.title.value;
    task.dueDate = event.target.elements.dueDate.value;
    task.owner = event.target.elements.owner.value;
    closeModal('exhibitionTaskModal');
    render();
    showToast('Exhibition task updated');
  }, true);

  document.addEventListener('change', event => {
    if (event.target.matches('#invoicePartyType')) updateInvoicePartyFields();
    if (event.target.matches('#clientStage,#clientForm [name="partySize"],#clientForm [name="roomType"]')) roomCompatibility();
    if (event.target.matches('#clientQuoteClientSelect')) {
      const client = clientBy(Number(event.target.value));
      const form = document.querySelector('#clientQuoteForm');
      if (client) {
        form.elements.cruiseId.value = client.cruiseId ? String(client.cruiseId) : '';
        if (!form.elements.amount.value) form.elements.amount.value = Number(client.bookingValue || 0) || '';
      }
    }
  });
  document.addEventListener('input', event => {
    if (event.target.matches('#clientForm [name="partySize"]')) roomCompatibility();
  });

  document.addEventListener('click', async event => {
    const target = event.target;
    const cruiseDetailTab = target.closest('[data-cruise-detail-tab]');
    if (cruiseDetailTab) {
      const modal = cruiseDetailTab.closest('#cruiseDetailModal');
      const selectedTab = cruiseDetailTab.dataset.cruiseDetailTab;
      modal?.querySelectorAll('[data-cruise-detail-tab]').forEach(button => {
        const active = button === cruiseDetailTab;
        button.classList.toggle('active', active);
       button.setAttribute('aria-selected', String(active));
     });
      modal?.querySelectorAll('[data-cruise-detail-panel]').forEach(panel => {
        const active = panel.dataset.cruiseDetailPanel === selectedTab;
        panel.classList.toggle('active', active);
        panel.hidden = !active;
      });
    }
    const addCruiseExpenseButton = target.closest?.('[data-add-cruise-expense]');
    if (addCruiseExpenseButton) {
      prepareExpense();
      const form = document.querySelector('#expenseForm');
      if (form?.elements.cruiseId) form.elements.cruiseId.value = addCruiseExpenseButton.dataset.addCruiseExpense;
    }
    const personRow = target.closest?.('[data-open-person-row]');
    if (personRow && !target.closest('button,a,input,select,textarea,label')) {
      preparePersonDetail(Number(personRow.dataset.openPersonRow));
    }
    if (target.closest('#addClientPageButton,#quickClient,[data-edit-client],[data-quick-add="client"]')) {
      setTimeout(roomCompatibility, 0);
    }
    if (target.closest('#quickAddButton')) openModal('quickAddModal');
    if (target.closest('#reminderButton') || target.closest('[data-open-reminders]')) openModal('reminderModal');
    if (target.closest('#addClientPageButton')) prepareClient();
    if (target.closest('#addSupplierQuoteButton')) prepareSupplierQuote();
    if (target.closest('#addClientQuoteButton')) prepareClientQuote();
    if (target.closest('#addInvoiceButton')) prepareInvoice();
    if (target.closest('#addEventButton')) prepareEvent();

    const financeTab = target.closest('[data-finance-panel]');
    if (financeTab) {
      activeFinancePanel = financeTab.dataset.financePanel;
      renderFinancePanels();
      applyLanguage();
    }

    const quick = target.closest('[data-quick-add]');
    if (quick) {
      closeModal('quickAddModal');
      const action = quick.dataset.quickAdd;
      if (action === 'client') prepareClient();
      if (action === 'cruise') prepareCruise();
      if (action === 'payment') preparePayment();
      if (action === 'expense') prepareExpense();
      if (action === 'supplierQuote') prepareSupplierQuote();
      if (action === 'invoice') prepareInvoice();
      if (action === 'event') prepareEvent();
    }

    const openClientRow = target.closest('#clientTableBody tr[data-open-client-row]');
    if (openClientRow && !target.closest('a,button,input,select,textarea,label')) {
      prepareClientDetail(Number(openClientRow.dataset.openClientRow));
    }
    const openClientButton = target.closest('[data-open-client]');
    if (openClientButton) prepareClientDetail(Number(openClientButton.dataset.openClient));
    const openCruiseButton = target.closest('[data-open-cruise]');
    if (openCruiseButton) prepareCruiseDetail(Number(openCruiseButton.dataset.openCruise));
    const addTravellerForClientButton = target.closest('[data-add-traveller-for-client]');
    if (addTravellerForClientButton) prepareGuest(null, Number(addTravellerForClientButton.dataset.addTravellerForClient));
    const addPassengerForClientButton = target.closest('[data-add-passenger-for-client]');
    if (addPassengerForClientButton) prepareGuest(null, Number(addPassengerForClientButton.dataset.addPassengerForClient));
    const editPassengerButton = target.closest('[data-edit-passenger]');
    if (editPassengerButton) prepareGuest(Number(editPassengerButton.dataset.editPassenger));
    const deletePassengerButton = target.closest('[data-delete-passenger]');
    if (deletePassengerButton) {
      const passengerId = Number(deletePassengerButton.dataset.deletePassenger), passenger = passengerBy(passengerId);
      if (passenger?.isPrimary) showToast('The primary passenger is the booked client. Edit the passenger instead of deleting it.');
      else if (passenger && askConfirm('Delete this passenger?')) {
        state.guests = state.guests.filter(item => Number(item.id) !== passengerId);
        render();
        showToast('Passenger deleted');
      }
    }
    const copyCruiseReportButton = target.closest('[data-copy-cruise-report]');
    if (copyCruiseReportButton) await copyCruiseReport(Number(copyCruiseReportButton.dataset.copyCruiseReport));
    const downloadCruiseReportButton = target.closest('[data-download-cruise-report]');
    if (downloadCruiseReportButton) downloadCruiseReport(Number(downloadCruiseReportButton.dataset.downloadCruiseReport));
    const createClientQuoteButton = target.closest('[data-create-client-quote]');
    if (createClientQuoteButton) prepareClientQuote(null, Number(createClientQuoteButton.dataset.createClientQuote));
    const createClientInvoiceButton = target.closest('[data-create-client-invoice]');
    if (createClientInvoiceButton) prepareInvoice(null, 'Client', Number(createClientInvoiceButton.dataset.createClientInvoice));
    const createSupplierInvoiceButton = target.closest('[data-create-supplier-invoice]');
    if (createSupplierInvoiceButton) {
      const supplier = state.people.find(person => Number(person.id) === Number(createSupplierInvoiceButton.dataset.createSupplierInvoice));
      prepareInvoice(null, 'Supplier', null, supplier?.name || '');
    }

    const editSupplierQuoteButton = target.closest('[data-edit-supplier-quote]');
    if (editSupplierQuoteButton) prepareSupplierQuote(Number(editSupplierQuoteButton.dataset.editSupplierQuote));
    const selectSupplierQuoteButton = target.closest('[data-select-supplier-quote]');
    if (selectSupplierQuoteButton) selectSupplierQuote(Number(selectSupplierQuoteButton.dataset.selectSupplierQuote));
    const createExpenseButton = target.closest('[data-create-quote-expense]');
    if (createExpenseButton) createExpenseFromQuote(Number(createExpenseButton.dataset.createQuoteExpense));
    const deleteSupplierQuoteButton = target.closest('[data-delete-supplier-quote]');
    if (deleteSupplierQuoteButton) {
      const quoteId = Number(deleteSupplierQuoteButton.dataset.deleteSupplierQuote);
      const quote = state.supplierQuotes.find(item => Number(item.id) === quoteId);
      if (quote?.expenseId) showToast('Delete the linked expense before deleting this quote');
      else if (quote && askConfirm('Delete this supplier quote?')) {
        state.supplierQuotes = state.supplierQuotes.filter(item => Number(item.id) !== quoteId);
        await deleteDocumentFile(`supplierQuote:${quoteId}`);
        render();
        showToast('Supplier quote deleted');
      }
    }

    const editClientQuoteButton = target.closest('[data-edit-client-quote]');
    if (editClientQuoteButton) prepareClientQuote(Number(editClientQuoteButton.dataset.editClientQuote));
    const copyQuoteButton = target.closest('[data-copy-client-quote]');
    if (copyQuoteButton) await copyClientQuote(Number(copyQuoteButton.dataset.copyClientQuote));
    const whatsappQuoteButton = target.closest('[data-whatsapp-client-quote]');
    if (whatsappQuoteButton) whatsAppClientQuote(Number(whatsappQuoteButton.dataset.whatsappClientQuote));
    const emailQuoteButton = target.closest('[data-email-client-quote]');
    if (emailQuoteButton) emailClientQuote(Number(emailQuoteButton.dataset.emailClientQuote));
    const deleteClientQuoteButton = target.closest('[data-delete-client-quote]');
    if (deleteClientQuoteButton && askConfirm('Delete this client quote?')) {
      state.clientQuotes = state.clientQuotes.filter(item => Number(item.id) !== Number(deleteClientQuoteButton.dataset.deleteClientQuote));
      render();
      showToast('Client quote deleted');
    }

    const editInvoiceButton = target.closest('[data-edit-invoice]');
    if (editInvoiceButton) prepareInvoice(Number(editInvoiceButton.dataset.editInvoice));
    const deleteInvoiceButton = target.closest('[data-delete-invoice]');
    if (deleteInvoiceButton && askConfirm('Delete this invoice?')) {
      const invoiceId = Number(deleteInvoiceButton.dataset.deleteInvoice);
      state.invoices = state.invoices.filter(item => Number(item.id) !== invoiceId);
      await deleteDocumentFile(`invoice:${invoiceId}`);
      render();
      showToast('Invoice deleted');
    }
    const clearGoogleFormButton = target.closest('[data-clear-google-form]');
    if (clearGoogleFormButton && askConfirm('Remove Google Form link from this client?')) {
      const client = clientBy(Number(clearGoogleFormButton.dataset.clearGoogleForm));
      if (client) {
        client.googleFormUrl = '';
        prepareClientDetail(client.id);
        showToast('Google Form link removed');
      }
    }
    const documentButton = target.closest('[data-download-document]');
    if (documentButton) await downloadSavedDocument(documentButton.dataset.downloadDocument, documentButton.dataset.documentName);

    const calendarNav = target.closest('[data-calendar-nav]');
    if (calendarNav) {
      const action = calendarNav.dataset.calendarNav;
      if (action === 'today') calendarCursor = new Date(`${TODAY.slice(0, 7)}-01T12:00:00`);
      else calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() + (action === 'next' ? 1 : -1), 1, 12);
      renderCalendar();
      applyLanguage();
    }
    const calendarItem = target.closest('[data-calendar-kind]');
    if (calendarItem) handleCalendarItem(calendarItem.dataset.calendarKind, calendarItem.dataset.calendarId);
    const editEventButton = target.closest('[data-edit-event]');
    if (editEventButton) prepareEvent(Number(editEventButton.dataset.editEvent));
    const deleteEventButton = target.closest('[data-delete-event]');
    if (deleteEventButton && askConfirm('Delete this event?')) {
      state.events = state.events.filter(item => Number(item.id) !== Number(deleteEventButton.dataset.deleteEvent));
      render();
      showToast('Event deleted');
    }
    const addEventForCruiseButton = target.closest('[data-add-event-for-cruise]');
    if (addEventForCruiseButton) prepareEvent(null, Number(addEventForCruiseButton.dataset.addEventForCruise));

    const editExhibitionTaskButton = target.closest('[data-edit-exhibition-task]');
    if (editExhibitionTaskButton) {
      const [exhibitionId, taskId] = editExhibitionTaskButton.dataset.editExhibitionTask.split(':').map(Number);
      prepareExhibitionTaskEnhanced(exhibitionId, taskId);
    }
    const backupNowButton = target.closest('[data-backup-now]');
    if (backupNowButton) {
      closeModal('reminderModal');
      enhancedBackup();
    }
    const reminderViewButton = target.closest('[data-reminder-view]');
    if (reminderViewButton) {
      closeModal('reminderModal');
      switchView(reminderViewButton.dataset.reminderView);
      if (reminderViewButton.dataset.reminderClient) {
        prepareClientDetail(Number(reminderViewButton.dataset.reminderClient));
      }
      if (reminderViewButton.dataset.reminderView === 'finance') {
        activeFinancePanel = 'cash';
        renderFinancePanels();
      }
    }

    if (target.closest('[data-delete-client]')) {
      const clientId = Number(target.closest('[data-delete-client]').dataset.deleteClient);
      closeModal('clientDetailModal');
      if (!clientBy(clientId)) {
        const removedInvoiceIds = state.invoices.filter(invoice => invoice.partyType === 'Client' && Number(invoice.clientId) === clientId).map(invoice => invoice.id);
        state.clientQuotes = state.clientQuotes.filter(quote => Number(quote.clientId) !== clientId);
        state.invoices = state.invoices.filter(invoice => !(invoice.partyType === 'Client' && Number(invoice.clientId) === clientId));
        for (const invoiceId of removedInvoiceIds) await deleteDocumentFile(`invoice:${invoiceId}`);
        render();
      }
    }
    if (target.closest('[data-delete-cruise]')) closeModal('cruiseDetailModal');
    const deletedPersonButton = target.closest('[data-delete-person]');
    if (deletedPersonButton && !state.people.some(person => Number(person.id) === Number(deletedPersonButton.dataset.deletePerson))) {
      closeModal('personDetailModal');
      currentPersonDetailId = null;
    }
  });

  document.addEventListener('keydown', event => {
    const personRow = event.target.closest?.('[data-open-person-row]');
    if (personRow && ['Enter', ' '].includes(event.key)) {
      event.preventDefault();
      preparePersonDetail(Number(personRow.dataset.openPersonRow));
      return;
    }
    const clientRow = event.target.closest?.('#clientTableBody tr[data-open-client-row]');
    if (!clientRow || !['Enter', ' '].includes(event.key)) return;
    event.preventDefault();
    prepareClientDetail(Number(clientRow.dataset.openClientRow));
  });

  document.querySelector('#enableNotificationsButton').addEventListener('click', async () => {
    if (!('Notification' in window)) {
      showToast('Computer notifications are not supported here');
      return;
    }
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      showToast('Computer notifications enabled');
      renderReminderCenter();
    } else showToast('Computer notifications were not allowed');
  });

  render();
})();
