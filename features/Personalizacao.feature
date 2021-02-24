Feature: Customization for each medical clinic
    As a admin of the medical clinic platform
    I want to be able to change the UI/UX of the platform
    So that I can adapt the platform to our medical clinic

    Scenario: change logo
        Given that the logo is stored in the system with file name "default_logo.jpg"
        When I upload from "default_logo.jpg" to "MyClinical_logo.jpg"
        Then the new logo is properly updated by the system
