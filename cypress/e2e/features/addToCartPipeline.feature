Feature: Add to cart validation

  @Smoke
  Scenario Outline: Verify the Add to cart functionality
    Given I am on the product page with wrong assertion
    When Select the "<bagText>" bag
    Then Validate the <bagAmount> and order summary

    Examples:
      | bagText         | bagAmount |
      | Driven Backpack |        36 |

  @Smoke @skip
  Scenario Outline: Verify the Add to cart functionality with skip tag
    Given I am on the product page
    When Select the "<bagText>" bag
    Then Validate the <bagAmount> and order summary

    Examples:
      | bagText         | bagAmount |
      | Driven Backpack |        36 |



