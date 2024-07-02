export const useCustomer = () => {
    const customerName = useState<string>('customerName', () => '');
    const hasNameError = computed(() => customerName.value.length < 3);

    const initials = computed(() => {
        const names = customerName.value.split(' ');
        if (names.length > 1) {
            return names[0].charAt(0).toUpperCase() + names[1].charAt(0).toUpperCase();
        } else {
            return names[0].charAt(0).toUpperCase();
        }
    })

    return { customerName, initials, hasNameError };
}