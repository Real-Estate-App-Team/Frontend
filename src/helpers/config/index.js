export const config = {
    project: {
        name: 'Prettier Homes',
        slogan: "Our slogan, 'Unlocking Your Home's Potential, Together,' reflects our dedication to helping clients realize the full potential of their real estate investments through collaborative and personalized services.",
        description: 'Unlock the Future of Technology at Our IT School: Discover Cutting-Edge Courses, Hands-on Training, and Expert Guidance. Join Today for a Thriving Tech Career!',
        version: '1.0.0',
    },
    contact: {
        phone1: "+1 (123) 456-4566 +5",
        phone2: "",
        email: "info@realstate.com",
        address: "329 Queensberry Street, North Melbourne VIC 3051, Australia.",
        website: "https://prettierhomes.com",
        mapURL: "https://goo.gl/maps/aekRiJbXVYuqVMxp7",
        mapEmbedURL: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3023.490731046204!2d-74.00457492439138!3d40.72922623656155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQzJzQ1LjIiTiA3NMKwMDAnMDcuMiJX!5e0!3m2!1sen!2sgr!4v1691050244325!5m2!1sen!2sgr",
        socialMedia: {
            twitter: "https://twitter.com",
            facebook: "https://facebook.com",
            instagram: "https://instagram.com",
            linkedin: "https://linkedin.com",
            youtube: "https://youtube.com",
        },
    },
    api: {
        baseUrl: 'https://mycampusmates.com/app',
    },
    pageRoles: {
        dashboard: ["ADMIN", "MANAGER", "ASSISTANTMANAGER", "TEACHER", "STUDENT"],
        adminManagement: ["ADMIN"],
        managerManagement: ["ADMIN"],
        assistantManagerManagement: ["ADMIN", "MANAGER"],
        teacherManagement: ["ADMIN", "ASSISTANTMANAGER"],
        lessonManagement: ["ADMIN", "ASSISTANTMANAGER"],
        studentManagement: ["ADMIN", "ASSISTANTMANAGER"],
        studentInfoManagement: ["TEACHER"],
        meetManagement: ["TEACHER"],
        contactMessages: ["ADMIN", "MANAGER", "ASSISTANTMANAGER"],
        chooseLesson: ["STUDENT"],
        gradesAndMeets: ["STUDENT"]
    },
    educationTerms: [
        { label: "Fall", key: "FALL_SEMESTER" },
        { label: "Spring", key: "SPRING_SEMESTER" },
    ],
    days: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

}