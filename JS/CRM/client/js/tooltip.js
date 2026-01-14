export function tooltipContact(type, value) {
    const tooltipDiv = document.createElement('div');
    const tooltipType = document.createElement('span');
    const tooltipValue = document.createElement('a');

    tooltipDiv.classList.add('tooltip__contact', 'tooltip-activ');
    tooltipType.classList.add('tooltip__contact-type', );
    tooltipValue.classList.add('tooltip__contact-value');

    tooltipType.textContent = type + ': ';
    tooltipValue.textContent = value;

    tooltipDiv.append(tooltipType, tooltipValue)


    return {
        tooltipDiv,
        tooltipType,
        tooltipValue
    }
}