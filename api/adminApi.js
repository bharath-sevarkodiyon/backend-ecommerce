const express = require('express');
const adminService = require('../service/adminService');
const loginMiddleware = require('../middleware/LoginMiddleware')
const adminApi = express.Router();

adminApi.post('/admin/login',[loginMiddleware.loginValidation], adminService.loginAdminService);

adminApi.post('/admin/logout', adminService.logoutAdminService);

module.exports = adminApi;