// Device Detection and Redirect Script
// Add this script to the <head> section of your desktop website (index.html)

(function() {
    // Check if user is on mobile device
    function isMobileDevice() {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        
        // Check for mobile devices
        const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet/i;
        
        return mobileRegex.test(userAgent.toLowerCase());
    }
    
    // Check if user has manually chosen to view desktop version
    function hasDesktopPreference() {
        return sessionStorage.getItem('viewDesktop') === 'true';
    }
    
    // Perform redirect if on mobile and no desktop preference
    function checkAndRedirect() {
        // Don't redirect if already on mobile version
        if (window.location.pathname.includes('mobile.html')) {
            return;
        }
        
        if (isMobileDevice() && !hasDesktopPreference()) {
            // Redirect to mobile version
            window.location.href = 'mobile.html';
        }
    }
    
    // Run check on page load
    checkAndRedirect();
    
    // Optional: Add a function to allow users to switch back to desktop
    window.viewDesktopVersion = function() {
        sessionStorage.setItem('viewDesktop', 'true');
        window.location.href = 'index.html';
    };
    
    window.viewMobileVersion = function() {
        sessionStorage.removeItem('viewDesktop');
        window.location.href = 'mobile.html';
    };
})();
