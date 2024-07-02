export const useCustomer = () => {
    const customerName = useState<string>('customerName', () => '');
    const hasNameError = computed(() => customerName.value.length < 3);

    return { customerName, hasNameError };
}