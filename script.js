
function handleLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        alert("يرجى تعبئة الحقول");
        return;
    }

    let data = localStorage.getItem("employeeHubData");
    if (!data) {
        data = { users: { admin: { passwordHash: "admin" } }, employees: [] };
        localStorage.setItem("employeeHubData", JSON.stringify(data));
        alert("تم إنشاء حساب مسؤول افتراضي (admin) بكلمة مرور 'admin'");
    } else {
        data = JSON.parse(data);
    }

    if (!data.users[username]) {
        alert("المستخدم غير موجود");
        return;
    }

    if (data.users[username].passwordHash !== password) {
        alert("كلمة المرور غير صحيحة");
        return;
    }

    localStorage.setItem("currentUser", username);
    alert("تم تسجيل الدخول بنجاح!");
    window.location.href = "dashboard.html";
}
