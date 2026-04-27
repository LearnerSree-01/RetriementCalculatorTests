import { expect} from '@wdio/globals'
import Page from './page.ts';
import RetirementCalculatorPageSelectors from '../support/selectors/retirementCalculatotPageSelectors.ts';
import RetirementCalculatorStrings from '../support/strings/retirementcalculatorPageStrings.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RetirementCalculatorPage extends Page {

   

   /**
   * Define Page Methods
   */


        public open () {
        return super.open('insights-tools/retirement-calculator.html');

        }
        
        //Fill required fields with provided values
        async fillRequiredFields (currentAge:  string, retirementAge:  string, currentIncome:  string, totalSavings:  string, annualsavings: string, plannedsavings: string) {
        await RetirementCalculatorPageSelectors.currentAge.setValue(currentAge)
        await RetirementCalculatorPageSelectors.retirementAge.setValue(retirementAge)

        await RetirementCalculatorPageSelectors.currentIncome.waitForDisplayed({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.currentIncome.waitForEnabled({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.currentIncome.scrollIntoView()
        await RetirementCalculatorPageSelectors.currentIncome.click()
        await RetirementCalculatorPageSelectors.currentIncome.setValue(currentIncome)


        await RetirementCalculatorPageSelectors.currentTotalSavings.waitForDisplayed({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.currentTotalSavings.waitForEnabled({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.currentTotalSavings.click()
               await RetirementCalculatorPageSelectors.currentTotalSavings.setValue(totalSavings)

        await RetirementCalculatorPageSelectors.currentAnnualSavings.setValue(annualsavings)

        await RetirementCalculatorPageSelectors.savingsIncreaseRate.setValue(plannedsavings)
        }


         //Fill All fields with provided values
        async fillAllFields (currentAge:  string, retirementAge:  string, currentIncome:  string,  spouseIncome: string, totalSavings:  string, annualsavings: string, plannedsavings: string) {
        await RetirementCalculatorPageSelectors.currentAge.setValue(currentAge)
        await RetirementCalculatorPageSelectors.retirementAge.setValue(retirementAge)

        await RetirementCalculatorPageSelectors.currentIncome.waitForDisplayed({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.currentIncome.waitForEnabled({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.currentIncome.scrollIntoView();
        await RetirementCalculatorPageSelectors.currentIncome.click()
        await RetirementCalculatorPageSelectors.currentIncome.setValue(currentIncome)

        await RetirementCalculatorPageSelectors.spouseIncome.waitForDisplayed({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.spouseIncome.waitForEnabled({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.spouseIncome.click()
        await RetirementCalculatorPageSelectors.spouseIncome.setValue(spouseIncome)
        

        await RetirementCalculatorPageSelectors.currentTotalSavings.waitForDisplayed({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.currentTotalSavings.waitForEnabled({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.currentTotalSavings.click()
        await RetirementCalculatorPageSelectors.currentTotalSavings.setValue(totalSavings)

        await RetirementCalculatorPageSelectors.currentAnnualSavings.waitForDisplayed({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.currentAnnualSavings.waitForEnabled({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.currentAnnualSavings.click()
        await RetirementCalculatorPageSelectors.currentAnnualSavings.setValue(annualsavings)

        await RetirementCalculatorPageSelectors.savingsIncreaseRate.waitForDisplayed({ timeout: 5000 })
        await RetirementCalculatorPageSelectors.savingsIncreaseRate.setValue(plannedsavings)
        }
   

        //Click Calculate button
        async clickCalculate () {
        await RetirementCalculatorPageSelectors.calculateButton.click()
        }

    

        // Select Social Security option yes
        async selectSocialSecurityOptionYes () {
            await RetirementCalculatorPageSelectors.socialSecurityToggleYes.waitForDisplayed({ timeout: 5000 });
            await RetirementCalculatorPageSelectors.socialSecurityToggleYes.scrollIntoView();
            await RetirementCalculatorPageSelectors.socialSecurityToggleYes.waitForClickable({ timeout: 5000 });
            await RetirementCalculatorPageSelectors.socialSecurityToggleYes.click();
            
           
        }
           
    


               // Select Social Security option yes
        async clickSocialSecurityOptionYes () {
            await RetirementCalculatorPageSelectors.socialSecurityToggleYes.waitForDisplayed({ timeout: 5000 });
            await RetirementCalculatorPageSelectors.socialSecurityToggleYes.scrollIntoView();
            await RetirementCalculatorPageSelectors.socialSecurityToggleYes.waitForClickable({ timeout: 5000 });
            await RetirementCalculatorPageSelectors.socialSecurityToggleYes.click();
            await RetirementCalculatorPageSelectors.socialSecurityToggleYes.waitForDisplayed({ timeout: 5000 });
        }

        async checkSocialSecurityFieldsDisplayed () {
           await RetirementCalculatorPageSelectors.socialSecurityToggleYes.isSelected()
       
            return await RetirementCalculatorPageSelectors.socialSecurityMarStatusSingle.isDisplayed() &&
                await RetirementCalculatorPageSelectors.socialSecurityMarStatusMarried.isDisplayed() &&
                await RetirementCalculatorPageSelectors.socialSecurityOverrideAmount.isDisplayed()
        }
     

         async clickSocialSecurityOptionNo () {
            await RetirementCalculatorPageSelectors.socialSecurityToggleNo.waitForDisplayed({ timeout: 5000 });
            await RetirementCalculatorPageSelectors.socialSecurityToggleNo.scrollIntoView();
            await RetirementCalculatorPageSelectors.socialSecurityToggleNo.waitForClickable({ timeout: 5000 });
            await RetirementCalculatorPageSelectors.socialSecurityToggleNo.click();
            await RetirementCalculatorPageSelectors.socialSecurityToggleNo.waitForDisplayed({ timeout: 5000 });
        }
        
        // Check if result section is displayed
     
        async isResultDisplayed () {
        await RetirementCalculatorPageSelectors.resultSection.waitForDisplayed( { timeout: 10000 } )
        return await RetirementCalculatorPageSelectors.resultSection.isDisplayed()
        }

        // Check if result section is displayed
     
        async isResultMessageDisplayed () {
        return await RetirementCalculatorPageSelectors.resultMessage.isDisplayed()
        return await expect(RetirementCalculatorPageSelectors.resultMessage).toHaveText(RetirementCalculatorStrings.ResultMessage)
        }

        //check if missing field error message is displayed when mandatory field is missing    
        async isMissingFieldMessageDisplayed () {
        return await RetirementCalculatorPageSelectors.errorMessage.isDisplayed()
        return await expect(RetirementCalculatorPageSelectors.errorMessage).toHaveText(RetirementCalculatorStrings.errorMessage )
        }


        //check if additional social security fields hide when social security toggle is no
        async areSocialSecurityFieldsHidden () {

            await RetirementCalculatorPageSelectors.socialSecurityToggleNo.isSelected()

            const singleHidden = !(await RetirementCalculatorPageSelectors.socialSecurityMarStatusSingle.isDisplayed());
            const marriedHidden = !(await RetirementCalculatorPageSelectors.socialSecurityMarStatusMarried.isDisplayed());
            const overrideHidden = !(await RetirementCalculatorPageSelectors.socialSecurityOverrideAmount.isDisplayed());
            if(singleHidden && marriedHidden && overrideHidden) {
                return true;
            }
            else {
                return false;
            }
        }




        // Click Adjust Default Value link
        async clickAdjustDefaultValue() {
            await RetirementCalculatorPageSelectors.adjustDefaultValueLink.waitForDisplayed({ timeout: 5000 });
            await RetirementCalculatorPageSelectors.adjustDefaultValueLink.scrollIntoView();
            await RetirementCalculatorPageSelectors.adjustDefaultValueLink.waitForClickable({ timeout: 5000 });
            await RetirementCalculatorPageSelectors.adjustDefaultValueLink.click();
        }

           // Click Adjust Default Value link
        async openAdjustDefaultValueModal() {
            await RetirementCalculatorPageSelectors.defaultCalculatorValues.isDisplayed();
            await RetirementCalculatorPageSelectors.adjustDefaultValueLink.waitForDisplayed({ timeout: 10000 });
            await RetirementCalculatorPageSelectors.adjustDefaultValueLink.scrollIntoView();
            await RetirementCalculatorPageSelectors.adjustDefaultValueLink.waitForClickable({ timeout: 5000 });
             
            await RetirementCalculatorPageSelectors.adjustDefaultValueLink.click();
        }

        // Check if default values modal is displayed
        async isDefaultValuesModalDisplayed() {
            return await RetirementCalculatorPageSelectors.defaultValuesModal.isDisplayed();
        }

        // Update default values in modal
        async updateDefaultValues(otherIncome: string, retirementDuration: string, retirementAnnualIncome: string,  pretirementAnnualIncomePercentage: string, postRetirementInvestmentReturn: string) {
            await RetirementCalculatorPageSelectors.defaultValuesModal.waitForDisplayed({ timeout: 5000 });
            await RetirementCalculatorPageSelectors.additionalIncomeDefaultValue.waitForDisplayed({ timeout: 5000 });
            await RetirementCalculatorPageSelectors.additionalIncomeDefaultValue.waitForEnabled({ timeout: 5000 });
            await RetirementCalculatorPageSelectors.additionalIncomeDefaultValue.click();
            await RetirementCalculatorPageSelectors.additionalIncomeDefaultValue.setValue(otherIncome);


            await RetirementCalculatorPageSelectors.retirementDuration.waitForDisplayed({ timeout: 5000 });
            await RetirementCalculatorPageSelectors.retirementDuration.setValue(retirementDuration);

            await RetirementCalculatorPageSelectors.retirementAnnualIncome.waitForDisplayed({ timeout: 5000 });
            await RetirementCalculatorPageSelectors.retirementAnnualIncome.setValue(retirementAnnualIncome);




            await RetirementCalculatorPageSelectors.pretirementAnnualIncomePercentage.waitForDisplayed({ timeout: 5000 });
            await RetirementCalculatorPageSelectors.pretirementAnnualIncomePercentage.setValue(pretirementAnnualIncomePercentage);
            
            
            await RetirementCalculatorPageSelectors.postRetirementInvestmentReturn.waitForDisplayed({ timeout: 5000 });
            await RetirementCalculatorPageSelectors.postRetirementInvestmentReturn.setValue(postRetirementInvestmentReturn);
        }

        // Close default values in modal
        async saveChangesDefaultValuesModal() {
        await RetirementCalculatorPageSelectors.saveChangesButton.click();
        await RetirementCalculatorPageSelectors.additionalIncomeDefaultValue.waitForDisplayed({ reverse: true }); 
        }


        // Check if field value is updated
        async isFieldValueUpdated(value: string) {
        
            await RetirementCalculatorPageSelectors.defaultValuesModal.waitForDisplayed({ timeout: 5000 });
            const fieldValue = await RetirementCalculatorPageSelectors.additionalIncomeDefaultValue.getValue();
            const cleanedFieldValue = fieldValue.replace(/[$,]/g, '');
            console.log('Field Value:', fieldValue, cleanedFieldValue, 'Expected Value:', value);
            if (parseInt(cleanedFieldValue) === parseInt(value)) {
                return true;
            }
            return false;
        }





    //close default values modal
            async closeDefaultValuesModal () {
                await RetirementCalculatorPageSelectors.cancelButton.waitForDisplayed({ timeout: 5000 })
                await RetirementCalculatorPageSelectors.cancelButton.waitForClickable({ timeout: 5000 })
                await RetirementCalculatorPageSelectors.cancelButton.click()
            }
         
}
export default new RetirementCalculatorPage();