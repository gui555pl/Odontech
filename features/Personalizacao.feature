Feature: Customization for each medical clinic
    As a admin of the medical clinic platform
    I want to be able to change the UI/UX of the platform
    So that I can adapt the platform to our medical clinic

    Scenario: change logo
        Given that the logo is stored in the system with file name "default_logo.jpg"
        When I upload from "default_logo.jpg" to "MyClinical_logo.jpg"
        Then the new logo is properly updated by the system
        And I am able to see the new image logo "MyClinical_logo.jpg"

    Scenario: change color palette
        Given that the platform colors are "#fff" and "#f00"
        And that I want to change colors of the platform
        When I edit the color from "#f00" to "#0ff"
        Then the new color is properly updated by the system

    Scenario: change medical clinic name
        Given that the platform clinic name is "My Clinic"
        And that I want to change it to "Medical Clinic Name"
        When I edit the name from "My Clinic" to "Medical Clinic Name"
        Then the new name is properly updated by the system
        And the new name "Medical Clinic Name" is shown in the user interface
_