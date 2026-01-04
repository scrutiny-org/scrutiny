// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';

declare const require: {
    context(path: string, deep?: boolean, filter?: RegExp): {
        keys(): string[];
        <T>(id: string): T;
    };
};

// First, initialize the Angular testing environment.
const testBed = getTestBed();
testBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

// Configure TestBed with necessary modules for icon registration
testBed.configureTestingModule({
    imports: [HttpClientTestingModule, MatIconModule]
});

// Register SVG icons for all tests (same as CoreModule)
try {
    const iconRegistry = testBed.inject(MatIconRegistry);
    const sanitizer = testBed.inject(DomSanitizer);

    iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/icons/material-twotone.svg'));
    iconRegistry.addSvgIconSetInNamespace('mat_outline', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/material-outline.svg'));
    iconRegistry.addSvgIconSetInNamespace('iconsmind', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/iconsmind.svg'));
    iconRegistry.addSvgIconSetInNamespace('dripicons', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dripicons.svg'));
    iconRegistry.addSvgIconSetInNamespace('feather', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/feather.svg'));
    iconRegistry.addSvgIconSetInNamespace('heroicons_outline', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/heroicons-outline.svg'));
    iconRegistry.addSvgIconSetInNamespace('heroicons_solid', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/heroicons-solid.svg'));
} catch (e) {
    // Icon registration failed, but tests can still run
    console.warn('Failed to register SVG icons in test environment:', e);
}

// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);

// And load the modules.
context.keys().map(context);
