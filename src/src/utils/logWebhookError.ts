export const logWebhookError = (message: string) => {
  console.error('🔴 Stripe Webhook Error:', message);
  // In production, log to file or external logging service
};
