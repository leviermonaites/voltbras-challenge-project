import bcryptjs from "bcryptjs";

class SecurityHelper {
  authenticateUser(password, password_hash) {
    return bcryptjs.compare(password, password_hash);
  }
}

export default SecurityHelper;
