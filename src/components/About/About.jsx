// About.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons"; // Arrow icon

function About() {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100 bg-light">
      <Card className="shadow-lg border-0 rounded-0 w-100 h-100">
        <Card.Body className="p-4 d-flex flex-column justify-content-center align-items-center">
          <div
            className="p-4 rounded-4 w-100 h-100 bg-white overflow-auto"
            style={{ maxWidth: "800px" }}
          >
            <h2 className="fw-bold text-center mb-4 text-success">About Us</h2>

            <p className="fs-5 text-muted text-justify">
              हमारी वेबसाइट एक <span className="fw-bold text-dark">Shop Management System</span> है,
              जो आपकी दुकान के प्रोडक्ट्स और स्टॉक को डिजिटल तरीके से मैनेज करने में मदद करती है।  
              अब आपको यह चिंता करने की ज़रूरत नहीं कि आपकी दुकान में कौन-सा सामान उपलब्ध है और उसकी
              कितनी क्वांटिटी बची हुई है।  
            </p>

            <p className="fs-5 text-muted text-justify">
              हमारी साइट की मदद से आप आसानी से अपनी दुकान का पूरा रिकॉर्ड रख सकते हैं। 
              जैसे-जैसे आप प्रोडक्ट्स जोड़ते या बेचते हैं, उसी समय हमारी साइट आपके स्टोर का 
              डेटा अपडेट कर देती है। इससे आपको हर समय <span className="fw-bold text-dark">
              Real-Time Information</span> मिलती रहती है।  
            </p>

            <p className="fs-5 text-muted text-justify">
              हमारी साइट का मकसद है आपकी दुकान को <span className="fw-bold text-dark">
              स्मार्ट और डिजिटल</span> बनाना। आप किसी भी समय, कहीं से भी यह देख सकते हैं कि:
            </p>

            <ul className="fs-5 text-muted">
              <li>कौन-से प्रोडक्ट्स आपके स्टोर में मौजूद हैं।</li>
              <li>हर प्रोडक्ट की कितनी क्वांटिटी उपलब्ध है।</li>
              <li>स्टॉक कब कम हो रहा है और आपको रीस्टॉक करने की ज़रूरत है।</li>
              <li>आपके बिज़नेस का पूरा डेटा एक ही जगह सुरक्षित है।</li>
            </ul>

            <p className="fs-5 text-muted text-justify">
              हमारी टीम लगातार इस सिस्टम को बेहतर बनाने पर काम कर रही है ताकि आपकी 
              दुकान का मैनेजमेंट आसान और तेज़ हो सके।  
            </p>

            <p className="fw-bold fs-5 text-center text-success mt-4">
              "आपका स्टोर, हमारी ज़िम्मेदारी – अब मैनेजमेंट होगा एकदम आसान!"
            </p>

            {/* Back to Home Button */}
            <div className="d-flex justify-content-center mt-4">
              <Button
                variant="outline-success"
                size="lg"
                className="d-flex align-items-center gap-2 px-4"
                onClick={() => navigate("/")}
              >
                <ArrowLeft size={20} />
                Back to Home
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
