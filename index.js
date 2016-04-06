/*
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

'use strict';

var returnData;
var metadataNodes = [];

function strip(ast, file, next) {
	while (ast.children[0].type !== 'heading'
	       || ast.children[0].depth !== 1
	       || ast.children[0].children[0].value !== 'Post text') {
		ast.children.shift();
	}

	// Get rid of the final "Post text" header
	ast.children.shift();

	next();
};

module.exports = function(remark, options, returnDataSet) {
	return strip;
};
