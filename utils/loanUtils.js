export function calculateMonthlyInterest(balance, interestRate) {
    return balance * (interestRate / 12);
}

export function calculateDisposableIncome(annualIncome, exemptionThreshold) {
    return Math.max(0, (annualIncome - exemptionThreshold) / 12);
}

export function calculateIncomeBased(disposableIncome, percentage) {
    return disposableIncome * percentage;
}

export function calculateLegalMinimum(balance, interestRate, remainingMonths) {
    const totalFutureValue = balance * (1 + interestRate);
    return remainingMonths > 0 ? totalFutureValue / remainingMonths : 0;
} 