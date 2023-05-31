const apiConfig = {
    baseUrl: import.meta.env.REACT_APP_API_BASE_URL,
    // Deep link
    firebaseDynamicLinkUrl: import.meta.env.REACT_APP_FIREBASE_DEEP_LINK_URL,
    androidPackageName: import.meta.env.REACT_APP_ANDROID_PACKAGE_NAME,
    deepLinkUrl: import.meta.env.REACT_APP_DEEP_LINK_URL,
    deepLinkDomainUri: import.meta.env.REACT_APP_FIREBASE_DEEP_LINK_DOMAIN_URI_PREFIX,
};

export default apiConfig;
