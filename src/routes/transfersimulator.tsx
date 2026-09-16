import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ChevronDown, PlusCircle } from "lucide-react";
import bankLogo from "@/assets/bank-reference.png";
import navHome from "@/assets/nav-home.png";
import navSend from "@/assets/nav-send.png";
import navRequest from "@/assets/nav-request.png";
import navBills from "@/assets/nav-bills.png";
import navMenu from "@/assets/nav-menu.png";
import iconPhone from "@/assets/phone.png";
import iconAt from "@/assets/at.png";
import iconBank from "@/assets/bank.png";
import iconCard from "@/assets/card.png";
import iconWallet from "@/assets/wallet.png";
import iconPerson from "@/assets/person.png";
import iconClipboard from "@/assets/clipboard.png";

export const Route = createFileRoute("/transfersimulator")({
  head: () => ({
    meta: [
      { title: "إرسال نقود | Instapay" },
      { name: "description", content: "إرسال النقود إلى المفضلين عبر Instapay." },
      { property: "og:title", content: "إرسال نقود | Instapay" },
      { property: "og:description", content: "إرسال النقود إلى المفضلين عبر Instapay." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TransferPage,
});

function TransferPage() {
  const navigate = useNavigate();
  return (
    <div className="ts" dir="rtl" lang="ar">
      <header className="ts-hero" />

      <section className="ts-from">
        <img className="ts-from-logo" src={bankLogo} alt="" />
        <div className="ts-from-info">
          <small>من</small>
          <input
            className="ts-from-name"
            type="text"
            dir="ltr"
            defaultValue="mohamed.othman4279@instapay"
            aria-label="اسم المرسل"
          />
          <span>PREPAID</span>
        </div>
        <button type="button" className="ts-from-toggle" aria-label="تغيير">
          <ChevronDown strokeWidth={2.2} />
        </button>
      </section>

      <section className="ts-card">
        <div className="ts-card-head">
          <h2>إرسال النقود إلى</h2>
          <button type="button" className="ts-fav">
            <span className="ts-fav-star" aria-hidden="true">☆</span>
            <span>المفضلين</span>
            <span className="ts-fav-chev" aria-hidden="true">‹</span>
          </button>
        </div>

        <div className="ts-tabs" role="tablist">
          <button type="button" role="tab" aria-selected="true" className="ts-tab active">
            <Smartphone strokeWidth={2.2} />
          </button>
          <button type="button" role="tab" className="ts-tab">
            <AtSign strokeWidth={2.2} />
          </button>
          <button type="button" role="tab" className="ts-tab">
            <Landmark strokeWidth={2.2} />
          </button>
          <button type="button" role="tab" className="ts-tab">
            <CreditCard strokeWidth={2.2} />
          </button>
          <button type="button" role="tab" className="ts-tab">
            <Wallet strokeWidth={2.2} />
          </button>
        </div>

        <div className="ts-field-head">
          <h3>رقم الهاتف</h3>
          <span className="ts-help" aria-hidden="true">؟</span>
        </div>

        <div className="ts-input-row">
          <div className="ts-input">
            <input type="tel" placeholder="رقم الهاتف" dir="rtl" />
            <span className="ts-input-icon">
              <ClipboardList strokeWidth={2.2} />
            </span>
          </div>
          <button type="button" className="ts-contact" aria-label="جهات الاتصال">
            <User strokeWidth={2.2} />
          </button>
        </div>

        <div className="ts-amount">
          <input type="text" placeholder="المبلغ" dir="rtl" />
          <span className="ts-amount-sep" aria-hidden="true" />
          <span className="ts-currency">EGP</span>
        </div>
      </section>

      <div className="ts-dots" aria-hidden="true">
        <span />
        <span className="on" />
      </div>

      <button type="button" className="ts-reason">
        <PlusCircle strokeWidth={2.2} />
        <span>أضف سبب التحويل</span>
      </button>

      <button type="button" className="ts-next">التالي</button>

      <nav className="bottom-nav" aria-label="التنقل">
        <button
          type="button"
          className="nav-item"
          aria-label="الرئيسية"
          onClick={() => navigate({ to: "/home" })}
        >
          <img src={navHome} alt="" />
          <span>الرئيسية</span>
        </button>
        <button type="button" className="nav-item active" aria-label="ارسال نقود">
          <img src={navSend} alt="" />
          <span>ارسال نقود</span>
        </button>
        <button type="button" className="nav-item" aria-label="طلب دفع">
          <img src={navRequest} alt="" />
          <span>طلب دفع</span>
        </button>
        <button type="button" className="nav-item" aria-label="الفواتير">
          <img src={navBills} alt="" />
          <span>الفواتير</span>
        </button>
        <button type="button" className="nav-item" aria-label="القائمة">
          <img src={navMenu} alt="" />
          <span>القائمة</span>
        </button>
      </nav>
    </div>
  );
}
