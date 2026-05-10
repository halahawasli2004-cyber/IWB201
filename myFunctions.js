// 1. تابع إظهار/إخفاء تفاصيل الوجبة (الصورة والمكونات)

function toggleDetails(checkbox, rowId) {
    var row = document.getElementById(rowId);
    if (checkbox.checked) {
        row.style.display = 'table-row'; // إظهار السطر المخفي
    } else {
        row.style.display = 'none'; // إخفاء السطر
    }
}

// 2. تابع إظهار نموذج الطلب عند الضغط على زر "متابعة"
function showForm() {
    document.getElementById("formSection").style.display = "block";
}

// 3. تابع التحقق من صحة المدخلات وإظهار النتيجة النهائية
function checkData() {
    let name = document.getElementById("name").value;
    let account = document.getElementById("account").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;

    // أ. التحقق من رقم الحساب (يجب أن يكون 6 أرقام وحقل إلزامي)
    if (account.length != 6 || isNaN(account)) {
        alert("خطأ: رقم الحساب المصرفي يجب أن يتكون من 6 أرقام وهو حقل إلزامي.");
        return false;
    }

    // ب. التحقق من الاسم (إنكليزي، مقطعين، فراغ واحد)
    let nameRegex = /^[a-zA-Z]+\s[a-zA-Z]+$/;
    if (name !== "" && !nameRegex.test(name)) {
        alert("خطأ: الاسم يجب أن يكون باللغة الإنكليزية فقط (الاسم والكنية) مع فراغ واحد بينهما.");
        return false;
    }

    // ج. التحقق من الموبايل (سيريتل أو MTN)
    let phoneRegex = /^09[345689]\d{7}$/; 
    if (phone !== "" && !phoneRegex.test(phone)) {
        alert("خطأ: رقم الموبايل يجب أن يطابق شبكتي سيريتل أو MTN (مثلاً 09xxxxxxx).");
        return false;
    }

    // د. التحقق من صيغة التاريخ (dd-mm-yyyy)
    let dateRegex = /^\d{2}-\d{2}-\d{4}$/;
    if (date !== "" && !dateRegex.test(date)) {
        alert("خطأ: صيغة التاريخ يجب أن تكون dd-mm-yyyy.");
        return false;
    }

    // هـ. حساب الفاتورة التقديرية وإظهار رسالة النجاح
  
    let amount = 110000; 
    let tax = amount * 0.10;
    let total = amount + tax;

    alert("تم التحقق من البيانات وإرسال الطلب بنجاح!\n\n" +
          "الفاتورة التقديرية:\n" +
          "القيمة: " + amount.toLocaleString() + " ل.س\n" +
          "الضريبة (10%): " + tax.toLocaleString() + " ل.س\n" +
          "الإجمالي الصافي: " + total.toLocaleString() + " ل.س");
    
    return true; 
}