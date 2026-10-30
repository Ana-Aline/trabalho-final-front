import { FooterComponent } from '../components/footer.component';
import { MESSAGES } from '../data/messages';
import { ROUTES } from '../data/routes';

export class HomePage {
  footer = new FooterComponent();

    accessProductsPage() {
        cy.visit(ROUTES.HOME);
    }
    scrollToFooter() {
        this.footer.scrollToFooter();
        this.footer.verifySubscriptionVisible();
    }

    subscribeEmail(email) {
        this.footer.subscribeEmail(email);
    } 

    verifySuccessSubscription() {
        this.footer.verifySuccessSubscription(MESSAGES.SUCCESS_SUBSCRIPTION);
    }
}