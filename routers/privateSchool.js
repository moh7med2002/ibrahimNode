const express = require("express");
const router = express.Router();

const privateSchoolControllers = require("../controllers/privateSchool");

const adminAuth = require("../middelware/AdminAuth");
const privateSchoolAuth = require("../middelware/PrivateSchoolAuth");

router.post("/login", privateSchoolControllers.loginPrivateSchool);
router.get("/all", privateSchoolControllers.getAllPrivateSchools);

router.get("/students/all", privateSchoolAuth, privateSchoolControllers.getAllStudents);
router.get("/forums/all", privateSchoolAuth, privateSchoolControllers.getAllForums);

router.get(
  "/students/:studentId",
  privateSchoolControllers.getStudent
);
router.get("/forums/:forumId", privateSchoolControllers.getForum);

router.put(
  "/student/info",
  privateSchoolAuth,
  privateSchoolControllers.updateStudentInfo
);
router.put("/forum/info",privateSchoolAuth, privateSchoolControllers.updateForumInfo);

router.get(
  "/parent/request",
  privateSchoolAuth,
  privateSchoolControllers.getAllParentWaiting
);
router.get(
  "/parent/request/history",
  privateSchoolAuth,
  privateSchoolControllers.getAllParentWaitingHistory
);
router.put(
  "/parent/request/accept/:id",
  privateSchoolAuth,
  privateSchoolControllers.acceptParentRequest
);
router.put(
  "/parent/request/reject/:id",
  privateSchoolAuth,
  privateSchoolControllers.rejectParentRequest
);

module.exports = router;
