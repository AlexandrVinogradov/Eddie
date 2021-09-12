import React, { ReactChild, SVGProps } from 'react'
import { css } from '@emotion/react'
import classNames from 'classnames'

interface Props extends SVGProps<SVGSVGElement> {
	size?: number
	color?: string
}

export function Icon(props: Props): JSX.Element {
	const { children, className, size, viewBox, color, ...otherProps } = props

	return (
		<svg
			{...otherProps}
			fill={color}
			className={classNames('inline-block', className)}
			css={css`
				width: ${size}px;
			`}
			viewBox={viewBox}
		>
			{children}
		</svg>
	)
}

Icon.defaultProps = {
	size: 24,
	color: 'currentColor',
}
