const RetirementCalculatorPageSelectors = {
/**
   * Define Page elements
   */


    // Age and Income fields
    get currentAge () { return $('#current-age') },
    get retirementAge () { return $('#retirement-age') },
    get currentIncome () { return $('#current-income') },
    get spouseIncome () { return $('#spouse-income') },
    get currentTotalSavings () { return $('#current-total-savings') },
    get currentAnnualSavings () { return $('#current-annual-savings') },
    get savingsIncreaseRate () { return $('#savings-increase-rate') },
    get defaultCalculatorValues () { return $('h2=Default calculator values') },

    // Social Security Income fields
    get socialSecurityToggleYes () { return $('label[for="yes-social-benefits"]') },
    get socialSecurityToggleNo () { return $('label[for="no-social-benefits"]') },
   // get socialSecurityToggleYes () { return $('input[name="social-security-benefits"][value="Y"]') },
    //get socialSecurityToggleNo () { return $('input[name="social-security-benefits"][value="N"]') },
    get socialSecurityMarStatusSingle () { return $('#single') },
    get socialSecurityMarStatusMarried () { return $('#married') },
    get socialSecurityOverrideAmount () { return $('#social-security-override') },
    

    // Buttons and results
    get calculateButton () { return $('button=Calculate') },
    get clearFormButton () { return $('button=Clear Form') },
    get adjustDefaultValueLink () { return $('a=Adjust default values') },
    get resultSection () { return $('#calculator-results-section') } ,
    get resultMessage () { return $('#result-message') },
    
    // Error messages
    get errorMessage () { return $('#calculator-input-alert')}, //Please fill out all required fields
    get invalidCurrentAgeMessage () { return $('#invalid-current-age-error')} , //Input required
    get invalidRetirementAgeMessage () { return $('#invalid-retirement-age-error')},  //Input required
    get invalidCurrentIncomeMessage () { return $('#invalid-current-income-error')},  //Input required
    get invalidCurrentTotalSavingsMessage () { return $('#invalid-current-total-savings-error')} , //Input required
    get invalidCurrentAnnualSavingsMessage () { return $('#invalid-current-annual-savings-error')},  //Input required
    get invalidSavingsIncreaseRateMessage () { return $('#invalid-savings-increase-rate-error')},  //Input required

    //Elements in Default Calculator values modal
    get defaultValuesModal () { return $('#default-values-modal') },
    get defaultRetirementAgeField () { return $('#default-retirement-age') },
    get saveDefaultsButton () { return $('#save-defaults') },
    get closeModalButton () { return $('.modal-close') } ,

    get defaultValuesButton () { return $('#default-values-modal') },
    get retirementDuration () { return $('#retirement-duration') },
     get retirementAnnualIncome () { return $('#retirement-annual-income') },
    get additionalIncomeDefaultValue () { return $('#additional-income') },
    get includeInflationRadioButtons () { return $('#include-inflation-container') }, 
    get expectedInflationRate () { return $('#expected-inflation-rate') },
    get pretirementAnnualIncomePercentage () { return $('#pre-retirement-roi') },
    get postRetirementInvestmentReturn () { return $('#post-retirement-roi') },
    get saveChangesButton () { return $('button=Save changes') },
    get cancelButton () { return $('button=Cancel') },
    get defaultValuesModalCloseButton () { return $('button^=close')},

    
   
   
};  

export default RetirementCalculatorPageSelectors;