def emailwall(firstname, otpcode):
    return f"""
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Wall</title>
</head>
<body style="margin:0;padding:0;font-family:'Quicksandregular', sans-serif;background-color:#F2F1FF;color:#000000;">
  <div style="width:100%;max-width:600px;margin:0 auto;background-color:#FFFFFF;border-radius:12px;overflow:hidden;padding:24px;">
    
    <!-- Header -->
    <div style="text-align:center;padding-bottom:24px;">
      <h1 style="color:#1467C8;font-family:'Quicksandbold', sans-serif;font-size:24px;margin:0;">Welcome to KaryGo!</h1>
      <p style="color:#8F8F8F;font-family:'Quicksandregular', sans-serif;font-size:14px;margin:4px 0 0;">Your journey starts here 🚀</p>
    </div>

    <!-- Content -->
    <div style="padding:16px 0;text-align:left;font-size:14px;color:#000000;line-height:1.5;">
      <p>Hello, {firstname}</p>
      <p>We are thrilled to have you on board. Use the OTP below to verify your email and get started with KaryGo!</p>
      <p>Remember, your account is your gateway to all the amazing features we’ve prepared for you.</p>
    </div>

    <!-- OTP -->
    <div style="text-align:center;margin:24px 0;">
      <h2 style="margin:0;font-size:20px;color:#1467C8;font-family:'Quicksandsemibold', sans-serif;">Your OTP is</h2>
      <h2 style="margin:12px 0 0;font-size:24px;color:#FFFFFF;background-color:#1467C8;display:inline-block;padding:12px 24px;border-radius:20px;font-family:'Quicksandsemibold', sans-serif;">{otpcode}</h2>
    </div>

    <!-- Footer -->
    <div style="text-align:center;font-size:12px;color:#8F8F8F;padding-top:16px;border-top:1px solid #E0E0E0;margin-top:24px;">
      <p style="margin:4px 0;">If you did not sign up for KaryGo, please ignore this email.</p>
      <p style="margin:4px 0;">&copy; 2026 KaryGo. All rights reserved.</p>
    </div>

  </div>
</body>
</html>
"""