"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fineManagementController_1 = require("../Controllers/fineManagementController");
const router = (0, express_1.Router)();
router.post("/add", fineManagementController_1.addFine);
router.delete("/delete/:id", fineManagementController_1.deleteFine);
router.put("/edit/:id", fineManagementController_1.editFine);
router.get("/all", fineManagementController_1.getAllFines);
exports.default = router;
