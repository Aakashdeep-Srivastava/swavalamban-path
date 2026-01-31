// Define types for our translations
type TranslationKeys = 
  | 'home' 
  | 'nitiSankalan' 
  | 'gyanvardhan' 
  | 'margdarshan' 
  | 'vittaPath'
  | 'login'
  | 'register'
  | 'chatTitle'
  | 'chatWelcome'
  | 'chatPlaceholder'
  | 'chatSend'
  | 'profile'
  | 'logout';

export type LanguageCode = 'en' | 'hi' | 'ta' | 'te' | 'bn' | 'mr' | 'gu' | 'kn' | 'ml' | 'pa';

// Map language names to codes
export const languageNameToCode: Record<string, LanguageCode> = {
  'English': 'en',
  'हिंदी': 'hi', // Hindi
  'தமிழ்': 'ta', // Tamil
  'తెలుగు': 'te', // Telugu
  'বাংলা': 'bn', // Bengali
  'मराठी': 'mr', // Marathi
  'ગુજરાતી': 'gu', // Gujarati
  'ಕನ್ನಡ': 'kn', // Kannada
  'മലയാളം': 'ml', // Malayalam
  'ਪੰਜਾਬੀ': 'pa'  // Punjabi
};

// Map codes to language names
export const languageCodeToName: Record<LanguageCode, string> = {
  'en': 'English',
  'hi': 'हिंदी',
  'ta': 'தமிழ்',
  'te': 'తెలుగు',
  'bn': 'বাংলা',
  'mr': 'मराठी',
  'gu': 'ગુજરાતી',
  'kn': 'ಕನ್ನಡ',
  'ml': 'മലയാളം',
  'pa': 'ਪੰਜਾਬੀ'
};

// Define all translations
const translations: Record<LanguageCode, Record<TranslationKeys, string>> = {
  en: {
    home: 'Home',
    nitiSankalan: 'Niti Sankalan',
    gyanvardhan: 'Gyanvardhan',
    margdarshan: 'Margdarshan',
    vittaPath: 'Vitta Path',
    login: 'Login',
    register: 'Register',
    chatTitle: 'Let\'s Chat!',
    chatWelcome: 'Hello! How can I help you today?',
    chatPlaceholder: 'Type your message...',
    chatSend: 'Send',
    profile: 'Profile',
    logout: 'Logout'
  },
  hi: {
    home: 'होम',
    nitiSankalan: 'नीति संकलन',
    gyanvardhan: 'ज्ञानवर्धन',
    margdarshan: 'मार्गदर्शन',
    vittaPath: 'वित्त पथ',
    login: 'लॉगिन',
    register: 'रजिस्टर',
    chatTitle: 'चैट करें!',
    chatWelcome: 'नमस्ते! आज मैं आपकी कैसे मदद कर सकता हूँ?',
    chatPlaceholder: 'अपना संदेश लिखें...',
    chatSend: 'भेजें',
    profile: 'प्रोफाइल',
    logout: 'लॉग आउट'
  },
  ta: {
    home: 'முகப்பு',
    nitiSankalan: 'நிதி சங்கலன்',
    gyanvardhan: 'ஞானவர்தன்',
    margdarshan: 'மார்க்தர்ஷன்',
    vittaPath: 'விட்டா பாத்',
    login: 'உள்நுழைய',
    register: 'பதிவு செய்ய',
    chatTitle: 'அரட்டை செய்வோம்!',
    chatWelcome: 'வணக்கம்! இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?',
    chatPlaceholder: 'உங்கள் செய்தியை தட்டச்சு செய்யவும்...',
    chatSend: 'அனுப்பு',
    profile: 'சுயவிவரம்',
    logout: 'வெளியேறு'
  },
  te: {
    home: 'హోమ్',
    nitiSankalan: 'నీతి సంకలన్',
    gyanvardhan: 'జ్ఞానవర్ధన్',
    margdarshan: 'మార్గదర్శన్',
    vittaPath: 'విత్త పాత్',
    login: 'లాగిన్',
    register: 'రిజిస్టర్',
    chatTitle: 'చాట్ చేయండి!',
    chatWelcome: 'హలో! నేడు నేను మీకు ఎలా సహాయం చేయగలను?',
    chatPlaceholder: 'మీ సందేశాన్ని టైప్ చేయండి...',
    chatSend: 'పంపండి',
    profile: 'ప్రొఫైల్',
    logout: 'లాగౌట్'
  },
  // Add basic translations for the rest of the languages (just for demo purposes)
  bn: {
    home: 'হোম',
    nitiSankalan: 'নীতি সংকলন',
    gyanvardhan: 'জ্ঞানবর্ধন',
    margdarshan: 'মার্গদর্শন',
    vittaPath: 'বিত্ত পথ',
    login: 'লগইন',
    register: 'রেজিস্টার',
    chatTitle: 'চ্যাট করুন!',
    chatWelcome: 'হ্যালো! আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?',
    chatPlaceholder: 'আপনার বার্তা টাইপ করুন...',
    chatSend: 'পাঠান',
    profile: 'প্রোফাইল',
    logout: 'লগআউট'
  },
  mr: {
    home: 'होम',
    nitiSankalan: 'नीति संकलन',
    gyanvardhan: 'ज्ञानवर्धन',
    margdarshan: 'मार्गदर्शन',
    vittaPath: 'वित्त पथ',
    login: 'लॉगिन',
    register: 'रजिस्टर',
    chatTitle: 'चॅट करा!',
    chatWelcome: 'नमस्कार! आज मी आपली कशी मदत करू शकतो?',
    chatPlaceholder: 'आपला संदेश टाइप करा...',
    chatSend: 'पाठवा',
    profile: 'प्रोफाइल',
    logout: 'लॉगआउट'
  },
  gu: {
    home: 'હોમ',
    nitiSankalan: 'નીતિ સંકલન',
    gyanvardhan: 'જ્ઞાનવર્ધન',
    margdarshan: 'માર્ગદર્શન',
    vittaPath: 'વિત્ત પથ',
    login: 'લોગિન',
    register: 'રજિસ્ટર',
    chatTitle: 'ચેટ કરો!',
    chatWelcome: 'હેલો! આજે હું તમને કેવી રીતે મદદ કરી શકું?',
    chatPlaceholder: 'તમારો સંદેશ લખો...',
    chatSend: 'મોકલો',
    profile: 'પ્રોફાઇલ',
    logout: 'લોગઆઉટ'
  },
  kn: {
    home: 'ಹೋಮ್',
    nitiSankalan: 'ನೀತಿ ಸಂಕಲನ್',
    gyanvardhan: 'ಜ್ಞಾನವರ್ಧನ್',
    margdarshan: 'ಮಾರ್ಗದರ್ಶನ್',
    vittaPath: 'ವಿತ್ತ ಪಾತ್',
    login: 'ಲಾಗಿನ್',
    register: 'ರಿಜಿಸ್ಟರ್',
    chatTitle: 'ಚಾಟ್ ಮಾಡಿ!',
    chatWelcome: 'ಹಲೋ! ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?',
    chatPlaceholder: 'ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಟೈಪ್ ಮಾಡಿ...',
    chatSend: 'ಕಳುಹಿಸಿ',
    profile: 'ಪ್ರೊಫೈಲ್',
    logout: 'ಲಾಗ್ಔಟ್'
  },
  ml: {
    home: 'ഹോം',
    nitiSankalan: 'നീതി സങ്കലൻ',
    gyanvardhan: 'ജ്ഞാനവർധൻ',
    margdarshan: 'മാർഗ്ദർശൻ',
    vittaPath: 'വിത്ത പാത്',
    login: 'ലോഗിൻ',
    register: 'രജിസ്റ്റർ',
    chatTitle: 'ചാറ്റ് ചെയ്യുക!',
    chatWelcome: 'ഹലോ! ഇന്ന് എനിക്ക് നിങ്ങളെ എങ്ങനെ സഹായിക്കാൻ കഴിയും?',
    chatPlaceholder: 'നിങ്ങളുടെ സന്ദേശം ടൈപ്പ് ചെയ്യുക...',
    chatSend: 'അയയ്ക്കുക',
    profile: 'പ്രൊഫൈൽ',
    logout: 'ലോഗൗട്ട്'
  },
  pa: {
    home: 'ਹੋਮ',
    nitiSankalan: 'ਨੀਤੀ ਸੰਕਲਨ',
    gyanvardhan: 'ਗਿਆਨਵਰਧਨ',
    margdarshan: 'ਮਾਰਗਦਰਸ਼ਨ',
    vittaPath: 'ਵਿੱਤ ਪਾਥ',
    login: 'ਲੌਗਿਨ',
    register: 'ਰਜਿਸਟਰ',
    chatTitle: 'ਚੈਟ ਕਰੋ!',
    chatWelcome: 'ਹੈਲੋ! ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?',
    chatPlaceholder: 'ਆਪਣਾ ਸੁਨੇਹਾ ਟਾਈਪ ਕਰੋ...',
    chatSend: 'ਭੇਜੋ',
    profile: 'ਪ੍ਰੋਫਾਈਲ',
    logout: 'ਲੌਗਆਊਟ'
  }
};

// Function to get translations
export function getTranslation(language: string, key: TranslationKeys): string {
  // Get the language code from the language name
  const langCode = languageNameToCode[language] || 'en';
  
  // Return the translation or fallback to English
  return translations[langCode]?.[key] || translations.en[key];
}