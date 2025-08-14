'use client';

import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Header */}
        <header className="bg-white rounded-2xl shadow p-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Dear Parent,
          </h1>
          <p className="mt-2 text-lg">
            Greetings from <span className="font-semibold">Sivagiri Runners</span>! 🇮🇳
          </p>
          <p className="mt-1 text-sm text-gray-600">
            This is a reminder for the <span className="font-medium">Independence Day Kids Drawing Competition</span> happening tomorrow.
          </p>
        </header>

        {/* Important Information */}
        <section className="mt-8 bg-white rounded-2xl shadow">
          <div className="border-b px-6 py-4 rounded-t-2xl bg-blue-600 text-white">
            <h2 className="text-xl font-semibold">📌 Important Information</h2>
          </div>
          <div className="px-6 py-5 space-y-2 text-sm sm:text-base">
            <p>• <span className="font-medium">Assemble Time:</span> 9:00 AM</p>
            <p>• <span className="font-medium">Competition Start:</span> 10:00 AM sharp</p>

            <div className="mt-4">
              <p className="font-semibold">• Time Limit:</p>
              <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                <li><span className="font-medium">Pre-school (Colouring):</span> 1 hour</li>
                <li><span className="font-medium">Other Categories:</span> 1 hour 30 mins</li>
              </ul>
            </div>

            <p>• Only registered kids are allowed to participate.</p>
            <p>• Parents are requested to wait outside in the waiting hall during the event.</p>
            <p>• Organisers will provide <span className="font-medium">chart paper only</span>.</p>
            <p>
              • Participants must bring their own stationery –
              colour pencils, crayons, sketch pens, watercolours, brushes, palettes, etc.
            </p>

            <div className="mt-4 bg-green-50 border border-green-200 text-green-900 rounded-xl p-4">
              We look forward to seeing our young artists showcase their talent tomorrow! 🎨✨
              <div className="mt-2 font-semibold">– Team Sivagiri Runners</div>
            </div>
          </div>
        </section>

        {/* Tamil Section */}
        <section className="mt-8 bg-white rounded-2xl shadow">
          <div className="border-b px-6 py-4 rounded-t-2xl bg-orange-500 text-white">
            <h2 className="text-xl font-semibold">🔸 ஓவியப் போட்டியின் தலைப்பு 📑🔸</h2>
          </div>
          <div className="px-6 py-5 space-y-5 leading-8">
            <p>
              🟣 <span className="font-semibold">PRE KG முதல் 1 ஆம் வகுப்பு</span> வரையிலான மாணவச் செல்வங்களுக்கு,
              நாங்கள் படத்தின் வடிவத்தை வழங்கிவிடுவோம். மேலும் குழந்தைகள் வண்ண பென்சில்கள் மற்றும்
              கிரயான்ஸ்களை மட்டுமே பயன்படுத்தி நாங்கள் கொடுக்கும் படத்தின் வடிவத்தை
              <span className="font-semibold"> 45 நிமிடத்தில் (10.00am to 10.45am)</span> வண்ணமயமாக்க வேண்டும்.
            </p>

            <p>
              🟣 <span className="font-semibold">2 முதல் 5 ஆம் வகுப்பு</span> வரை உள்ள மாணவச்செல்வங்களுக்கு,
              கொடுக்கப்பட்டுள்ள தலைப்பு (<span className="italic">"இந்திய தேசிய பறவை"</span>) அல்லது
              (<span className="italic">"இயற்கை காட்சிகளின் தொகுப்பு"</span>) ஆகும். மாணவச்செல்வங்கள் இதில் கூறப்பட்டுள்ள
              இரண்டு தலைப்புகளில் ஒன்றைத் தேர்ந்தெடுத்து, போட்டி ஆரம்பித்த நேரத்தில் இருந்து
              <span className="font-semibold"> 1 மணி நேரம் 30 நிமிடத்தில் (10.00am to 11:30am)</span> வரைந்து வண்ணமயமாக்க வேண்டும்.
            </p>

            <p>
              🟣 <span className="font-semibold">6 முதல் 9 ஆம் வகுப்பு</span> வரை உள்ள மாணவச்செல்வங்களுக்கு,
              கொடுக்கப்பட்டுள்ள தலைப்பு <span className="italic">"சுற்றுச்சூழலை பாதுகாப்போம் (Save Water and Save Life)"</span>.
              இந்த தலைப்பினை மையமாக கொண்டு வரைபடத்தை
              <span className="font-semibold"> 1 மணி நேரம் 30 நிமிடத்தில் (10.00am to 11.30am)</span>
              வரைந்து வண்ணமயமாக்க வேண்டும்.
            </p>

            <p>
              🟣 போட்டி முடிந்தவுடன் ஓவிய ஆசிரியர்கள் (நடுவர்கள்) மூலம் சிறந்த ஓவியங்கள்
              தேர்ந்தெடுக்கப்பட்டு முதல் மூன்று சிறப்பு பரிசுகள் வழங்கப்படவுள்ளன. மேலும் போட்டியில்
              கலந்துக்கொண்ட அனைத்து குழந்தைச்செல்வங்களுக்கும் <span className="font-semibold">Certificates</span> மற்றும்
              <span className="font-semibold"> Trophies</span> வழங்கப்படவுள்ளது. இப்போட்டியில் நடுவர்களின்
              தீர்ப்பே இறுதியானது.
            </p>

            <p className="font-semibold text-center pt-2">🙏 சிவகிரி ரன்னர்ஸ் குழு</p>
          </div>
        </section>
      </div>
    </div>
  );
}
