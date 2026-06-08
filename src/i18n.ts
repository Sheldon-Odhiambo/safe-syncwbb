export const translations = {
  en: {
    Platform: 'Platform',
    Industries: 'Industries',
    Benefits: 'Benefits',
    About: 'About',
    Demo: 'Demo',
    QuickGuide: 'Quick-Guide Protocols',
    MedicalEmergency: 'Medical Emergency',
    FireProtocol: 'Fire Protocol',
    IntrusionAlert: 'Intrusion Alert',
    MedicalDesc: 'Secure the area, assess the condition, initiate SafeSync alert, and follow operator instructions.',
    FireDesc: 'Activate alarm, evacuate following designated routes, trigger SafeSync alert, and assemble at the meet point.',
    IntrusionDesc: 'Secure rooms, remain quiet, trigger silent SafeSync alert, and wait for security intervention.',
  },
  sw: {
    Platform: 'Jukwaa',
    Industries: 'Sekta',
    Benefits: 'Faida',
    About: 'Kuhusu',
    Demo: 'Demo',
    QuickGuide: 'Itifaki za Mwongozo wa Haraka',
    MedicalEmergency: 'Dharura ya Kimatibabu',
    FireProtocol: 'Itifaki ya Moto',
    IntrusionAlert: 'Tahadhari ya Uvamizi',
    MedicalDesc: 'Linda eneo, tathmini hali, anzisha tahadhari ya SafeSync, na ufuate maagizo ya mwendeshaji.',
    FireDesc: 'Washa kengele, toka nje kwa kufuata njia zilizotengwa, anzisha tahadhari ya SafeSync, na ukutane mahali pa kukutania.',
    IntrusionDesc: 'Linda vyumba, kaa kimya, anzisha tahadhari ya kimya ya SafeSync, na usubiri kuingilia kati kwa usalama.',
  },
  fr: {
    Platform: 'Plateforme',
    Industries: 'Industries',
    Benefits: 'Avantages',
    About: 'À propos',
    Demo: 'Démo',
    QuickGuide: 'Protocols de guide rapide',
    MedicalEmergency: 'Urgence médicale',
    FireProtocol: 'Protocole incendie',
    IntrusionAlert: 'Alerte intrusion',
    MedicalDesc: 'Sécurisez la zone, évaluez l\'état, lancez l\'alerte SafeSync et suivez les instructions de l\'opérateur.',
    FireDesc: 'Activez l\'alarme, évacuez en suivant les itinéraires désignés, déclenchez l\'alerte SafeSync et rassemblez-vous au point de rencontre.',
    IntrusionDesc: 'Sécurisez les pièces, restez silencieux, déclenchez l\'alerte silencieuse SafeSync et attendez l\'intervention de la sécurité.',
  }
};

export type Language = 'en' | 'sw' | 'fr';
export const languages: Language[] = ['en', 'sw', 'fr'];
