# totalsFilter
AngularJS filter for adding values and returning the total. Objects that can be used as data models include:

- an array of values
- an array of objects
- an array/object of objects

#### Usage

Include a `<script>` include for `totals.filter.js` to your index file.

Add `| totals` to your expression evaluation to filter your result.
``` html
<span ng-bind="amountsArr | totals"></span>
```

If you want to target an object property when filtering against an object, pass that into the filter like so, where `value` is the key name of your target property -

``` html
<span ng-bind="amountsObj | totals: 'value'"></span>
```

#### Examples
See a tutorial on how to create the filter @ <a href="http://www.codaform.net">Codaform</a>.
See the code in action @ <a href="http://plnkr.co/edit/V0fiH9?p=preview">Plunker</a>

