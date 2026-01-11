    // Screen Width and Orientation Detection Script
    // Add this script to the <head> section of your desktop website (index.html)

    (function() {
        // Configuration - adjust these values as needed
        const MAX_MOBILE_WIDTH = 768; // pixels - redirect if width is less than this
        
        // Check if user has manually chosen to view desktop version
        function hasDesktopPreference() {
            return sessionStorage.getItem('viewDesktop') === 'true';
        }
        
        // Get current screen dimensions and orientation
        function getScreenInfo() {
            return {
                width: window.innerWidth || document.documentElement.clientWidth,
                height: window.innerHeight || document.documentElement.clientHeight,
                orientation: window.screen.orientation?.type || 
                           (window.innerWidth > window.innerHeight ? 'landscape' : 'portrait')
            };
        }
        
        // Determine if mobile version should be shown
        function shouldShowMobile() {
            const screenInfo = getScreenInfo();
            
            // Show mobile version if width is below threshold AND in portrait mode
            // OR if width is very narrow even in landscape
            if (screenInfo.width < MAX_MOBILE_WIDTH) {
                // If in portrait, always redirect
                if (screenInfo.orientation.includes('portrait')) {
                    return true;
                }
                // If in landscape but still narrow (like a small phone), redirect
                if (screenInfo.width < 600) {
                    return true;
                }
            }
            
            return false;
        }
        
        // Perform redirect if conditions are met
        function checkAndRedirect() {
            // Don't redirect if already on mobile version
            if (window.location.pathname.includes('mobile.html')) {
                return;
            }
            
            if (shouldShowMobile() && !hasDesktopPreference()) {
                // Redirect to mobile version
                window.location.href = 'mobile_website.html';
            }
        }
        
        // Run check on page load
        checkAndRedirect();
        
        // Re-check on orientation change or window resize
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function() {
                if (!hasDesktopPreference()) {
                    checkAndRedirect();
                }
            }, 250); // Debounce to avoid excessive checks
        });
        
        window.addEventListener('orientationchange', function() {
            setTimeout(function() {
                if (!hasDesktopPreference()) {
                    checkAndRedirect();
                }
            }, 100);
        });
        
        // Functions to allow users to switch versions manually
        window.viewDesktopVersion = function() {
            sessionStorage.setItem('viewDesktop', 'true');
            window.location.href = 'index.html';
        };
        
        window.viewMobileVersion = function() {
            sessionStorage.removeItem('viewDesktop');
            window.location.href = 'mobile_website.html';
        };
    })();
